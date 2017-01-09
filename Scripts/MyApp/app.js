/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'MyApp',

    extend: 'MyApp.Application',
    
    autoCreateViewport: 'MyApp.view.main.Main',
	appFolder: 'Scripts/MyApp/app/'

    //-------------------------------------------------------------------------
    // Most customizations should be made to MyApp.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});


//<debug>
Ext.Loader.setConfig({
    enabled : true,
    paths   : {
        'Ext'   : '/Scripts/ext/src/',
        'MyApp' : '/Scripts/MyApp/app/'
    }
});
//</debug>
//Ext.Loader.setPath('MyApp', '/Scripts/MyApp/app/');
//Ext.Loader.setPath('Ext', '/Scripts/ext/src/');
//paths   : {
//        'Ext'   : '/Scripts/ext/src/',
//        'MyApp' : '/Scripts/MyApp/app/'
//    }