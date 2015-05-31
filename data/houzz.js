// When an image is right clicked
self.on('context', function(node){
    // Only show the context menu if the img is from houzz and already not at max resolution
    return (node.src.search(/^http:\/\/st\.houzz\.com\/simgs\/[a-z0-9]{16}_[0-8]-\d{4}\/[\w\-]+\.jpg$/g) > -1);
});

// When the context menu item is selected
self.on('click', function(node){
    // Send url to add on with max res image replaced
    self.postMessage(node.src.replace(/[0-8](?=-\d{4}\/[\w\-]+\.jpg$)/g, '9'));
});
