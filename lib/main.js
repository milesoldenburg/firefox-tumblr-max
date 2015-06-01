// SDK Dependencies
var contextMenu = require('sdk/context-menu');
var data = require('sdk/self').data;
var tabs = require('sdk/tabs');

// Chrome dependencies
var {Cu} = require('chrome');
var {Downloads} = Cu.import('resource://gre/modules/Downloads.jsm');
var {OS} = Cu.import('resource://gre/modules/osfile.jsm')
var {Task} = Cu.import('resource://gre/modules/Task.jsm');

var openUrlInNewTab = function(url){
    // Open image in new tab
    tabs.open(url);
};

var downloadUrl = function(url){
    Task.spawn(function(){
        // Use the last piece of the URL as the file name for download
        var downloadName = url.substr(url.lastIndexOf('/') + 1);

        // Download into users downloads directory
        yield Downloads.fetch(url, OS.Path.join(OS.Constants.Path.homeDir, 'Downloads', downloadName));
    }).then(null, Cu.reportError);
};

// New Tab Tumblr menu option
contextMenu.Item({
    'contentScriptFile' : data.url('tumblr.js'),
    'context' : contextMenu.SelectorContext('img'),
    'label' : 'Tumblr Max Image: New Tab',
    'onMessage' : openUrlInNewTab
});

// Download Tumblr menu option
contextMenu.Item({
    'contentScriptFile' : data.url('tumblr.js'),
    'context' : contextMenu.SelectorContext('img'),
    'label' : 'Tumblr Max Image: Download',
    'onMessage' : downloadUrl
});

// New Tab Houzz menu option
contextMenu.Item({
    'contentScriptFile' : data.url('houzz.js'),
    'context' : contextMenu.SelectorContext('img'),
    'label' : 'Houzz Image: New Tab',
    'onMessage' : openUrlInNewTab
});

// Download Houzz menu option
contextMenu.Item({
    'contentScriptFile' : data.url('houzz.js'),
    'context' : contextMenu.SelectorContext('img'),
    'label' : 'Houzz Image: Download',
    'onMessage' : downloadUrl
});

// New Tab ArchDaily menu option
contextMenu.Item({
    'contentScriptFile' : data.url('archdaily.js'),
    'context' : contextMenu.SelectorContext('img'),
    'label' : 'ArchDaily Image: New Tab',
    'onMessage' : openUrlInNewTab
});

// Download ArchDaily menu option
contextMenu.Item({
    'contentScriptFile' : data.url('archdaily.js'),
    'context' : contextMenu.SelectorContext('img'),
    'label' : 'ArchDaily Image: Download',
    'onMessage' : downloadUrl
});
