sap.ui.define([
    "jquery.sap.global",
    "sap/ui/core/UIComponent",
    "com/template/Application"
], function(jQuery, BaseUIComponent, Application) {
    "use strict";

    return BaseUIComponent.extend("com.template.Component", {
        _sContentDensityClassCozy: "sapUiSizeCozy",
        _sContentDensityClassCompact: "sapUiSizeCompact",

        _oApplication: null,
        getApplication: function() {
            return this._oApplication;
        },

        metadata: {
            manifest: "json",
        },

        getContentDensityClass : function() {
			if (!this._sContentDensityClass) {
                this._sContentDensityClass = sap.ui.Device.support.touch ? this._sContentDensityClassCozy : this._sContentDensityClassCompact;
			}
			return this._sContentDensityClass;
		},

        createContent: function() {
            return sap.ui.view({
                id: "Root",
                viewName: "com.template.view.Root",
                type: sap.ui.core.mvc.ViewType.XML,
                viewData: {
                    component: this
                }
            });
        },

        init: function() {
            BaseUIComponent.prototype.init.apply(this, arguments);

            if(this.getRouter()) {
                try {
                    this.getRouter().initialize();
                } catch(ex) {
                    console.error(ex);
                }
            }else{
                console.log("No router found, skipping router initialization");
            }

            var standardApplication = this.getRootControl().byId("app");

            this._oApplication = new Application();
            this._oApplication.initialize(this, standardApplication);

            console.log("Component init OK");
        }
    });
});
