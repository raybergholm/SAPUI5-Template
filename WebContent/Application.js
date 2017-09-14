sap.ui.define([
    "sap/ui/base/Object",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function(BaseSapObject, MessageToast, MessageBox) {
    "use strict";

    return BaseSapObject.extend("com.template.controller.Application", {
        _oComponent: null,
        _oStandardApplication: null,
        _oLocalisationModel: null,

        _sJsonFilesModulePath: "com.template.mock",
        _sMockDataJsonFilepath: "/mockData.json",

        _fnGlobalEventCallback: null, // this is needed since we need .bind(this), but this act creates a new function ref. So we need to store the ref when we want to remove the old event listener.

        _uiGlobalErrorDialog: null,

        _loadMockData: function() {
            var mainModel = this._oComponent.getModel();

            if(mainModel) {
                mainModel.loadData(jQuery.sap.getModulePath(this._sJsonFilesModulePath) + this._sMockDataJsonFilepath);
            }
        },

        _globalErrorCallback: function(oEvent) {
            this._oComponent.getRootControl().getController().showGlobalErrorDialog(oEvent);
        },

        initialize: function(oParentComponent, oStandardApplication) {
            console.log("Application init started");

            this._oComponent = oParentComponent;
            this._oStandardApplication = oStandardApplication;

            this._oLocalisationModel = this._oComponent.getModel("i18n");

            this.attachGlobalErrorDialog();

            this._loadMockData();

            console.log("Application init OK");
        },

        attachGlobalErrorDialog: function() {
            this.detachGlobalErrorDialog(); // let's be absolutely certain we don't double-register the event listener
            this._fnGlobalEventCallback = this._globalErrorCallback.bind(this);
            window.addEventListener("error", this._fnGlobalEventCallback);
        },

        detachGlobalErrorDialog: function() {
            if(this._fnGlobalEventCallback !== null) {
                window.removeEventListener("error", this._fnGlobalEventCallback);
                this._fnGlobalEventCallback = null;
            }
        }
    });
});
