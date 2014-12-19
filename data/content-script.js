// When an image is right clicked
self.on('context', function(node){
    // Only show the context menu if the img is from tumblr and already not at max resolution
    return (node.src.search(/^(https?:\/\/)[0-9]+(\.media\.tumblr\.com\/)(\w)*(\/tumblr_)(\w)*_(?!1280)(\d)*\.(jpg|gif|png|jpeg)$/g) > -1) ? true : false;
});

// When the context menu item is selected
self.on('click', function(node){
    // Send url to add on with max res image replaced
    self.postMessage(node.src.replace(/(\d)+(?=\.(jpg|gif|png|jpeg)$)/g, '1280'));
});
