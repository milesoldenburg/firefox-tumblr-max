// SDK Dependencies
var contextMenu = require('sdk/context-menu');
var data = require('sdk/self').data;
var tabs = require('sdk/tabs');

// Chrome dependencies
var {Cu} = require('chrome');
var {Downloads} = Cu.import('resource://gre/modules/Downloads.jsm');
var {OS} = Cu.import('resource://gre/modules/osfile.jsm')
var {Task} = Cu.import('resource://gre/modules/Task.jsm');

// New Tab menu option
var tabItem = contextMenu.Item({
    'contentScriptFile' : data.url('content-script.js'),
    'context' : contextMenu.SelectorContext('img'),
    'label' : 'Tumblr Max Image: New Tab',
    'onMessage' : function(url){
        // Open image in new tab
        tabs.open(url);
    }
});

// Download menu option
var downloadItem = contextMenu.Item({
    'contentScriptFile' : data.url('content-script.js'),
    'context' : contextMenu.SelectorContext('img'),
    'label' : 'Tumblr Max Image: Download',
    'onMessage' : function(url){
        Task.spawn(function(){
            // Use the last piece of the URL as the file name for download
            var downloadName = url.substr(url.lastIndexOf('/') + 1);
            
            // Download into users downloads directory
            yield Downloads.fetch(url, OS.Path.join(OS.Constants.Path.homeDir, 'Downloads', downloadName));
        }).then(null, Cu.reportError);
    }
});
