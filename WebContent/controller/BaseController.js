sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(BaseStandardController) {
    "use strict";

    // Pretty much every method here are convenience methods for commonly encountered use cases
    return BaseStandardController.extend("com.template.controller.BaseController", {
        _sLocalizationModelId: "i18n",
        _oLocalizationModel: null,

        onInit: function(){
            this._oLocalizationModel = this.getOwnerComponent().getModel(_oLocalizationModel);

            this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
        },

        getApplication: function() {
            return this.getOwnerComponent().getApplication();
        },

        getRouter: function() {
            return this.getOwnerComponent().getRouter();
        },

        getModel: function(sName) {
            return this.getView().getModel(sName);
        },

        getLocalizationModel: function(){
            return this._oLocalizationModel;
        },

        getResourceBundle: function() {
            return this._oLocalizationModel.getResourceBundle();
        },

        onUpdateStartedGeneric: function(oEvent) {
            oEvent.getSource().setBusy(true);
        },

        onUpdateFinishedGeneric: function(oEvent) {
            oEvent.getSource().setBusy(false);
        }
    });
});
