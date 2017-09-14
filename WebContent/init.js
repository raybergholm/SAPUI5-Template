(function() {
    "use strict";

    function init() {
        var component = sap.ui.component({
            id: "component",
            name: "com.template"
        });

        var container = new sap.ui.core.ComponentContainer({
            component: component
        });

        container.placeAt("content");
    }

    // Bind the init function
    sap.ui.getCore().attachInit(init);
})();
