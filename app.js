/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'AutoWebServer.Application',

    name: 'AutoWebServer',

    requires: [
        // This will automatically load all classes in the AutoWebServer namespace
        // so that application classes do not need to require each other.
        'AutoWebServer.*'
    ],

    // The name of the initial view to create.
    mainView: 'AutoWebServer.view.main.Main'
});
