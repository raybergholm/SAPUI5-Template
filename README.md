# SAPUI5-Template
Quickstart template for building a SAPUI5/OpenUI5 app.

## How does this work?
This template is based off the current SAPUI5/OpenUI5 paradigm (September 2017, library version 1.48) and was made to be a foundation for quick prototyping and development.

Whether you wish to use Eclipse or WebIDE is up to you, this template was made in Eclipse but can be ported over.

## Features

* A simple app structure for starting development. The Root view contains a basic implementation for both App and SplitApp controls, use whichever is appropriate for your needs.
* A built-in error event handler to notify you when errors occur. This opens a dialog with the stack trace visible so that errors don't end up hidden in the console.
* Application.js is a custom object for handling the main application logic. It contains references to the App/SplitApp control, its owner Component, the views/controllers, etc so it can be used as a place for dealing with cross-view logic, app navigation, etc.
* All controllers extend BaseController.js, which in turn extends the standard sap.ui.core.mvc.Controller. This is a common superclass containing some convenience methods, as well as a place for any logic which should be implemented by all controllers.
