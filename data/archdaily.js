// When an image is right clicked
self.on('context', function(node){
    // Only show the context menu if the img is not already at max resolution
    return (node.src.search(/^http:\/\/ad009cdnb\.archdaily\.net(\.s3.amazonaws.com)?\/wp-content\/uploads\/\d{4}\/\d{2}\/[\w-]+\d*x\d*\.jpg$/g) > -1);
});

// When the context menu item is selected
self.on('click', function(node){
    // Send url to add on with max res image replaced
    self.postMessage(node.src.replace(/-\d*x\d*(?=\.jpg$)/g, ''));
});
