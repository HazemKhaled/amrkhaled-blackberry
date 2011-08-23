
function createLinkElement(href){
    var linkElement = document.createElement("link");
    linkElement.setAttribute("rel", "stylesheet");
    linkElement.setAttribute("type", "text/css");
    linkElement.setAttribute("media", "screen");
    linkElement.setAttribute("href", href);
    
    document.getElementsByTagName("head")[0].appendChild(linkElement);
}
