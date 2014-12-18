// Dependencies
var contextMenu = require('sdk/context-menu');
var data = require('sdk/self').data;
var tabs = require('sdk/tabs');

var menuItem = contextMenu.Item({
    'contentScriptFile' : data.url('content-script.js'),
    'context' : contextMenu.SelectorContext('img'),
    'label' : 'Tumblr: Open max res image in new tab',
    'onMessage' : function(url){
        // Open image in new tab
        tabs.open(url);
    }
});
