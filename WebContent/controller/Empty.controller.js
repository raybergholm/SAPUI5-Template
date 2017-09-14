sap.ui.define([
    "./BaseController"
], function(BaseController) {
    "use strict";

    return BaseController.extend("com.template.controller.Empty", {
    	onInit: function(){
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
        }
    });
});
