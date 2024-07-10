var iframes = document.getElementsByTagName("iframe");
for (var i = 0, l = iframes.length; i < l; i++) {
    var images = iframes[i].contentWindow.document.getElementsByTagName("img");
    for (var j = 0, m = images.length; j < m; j++) {
        images[j].className = "";
        images[j].src = images[j].src.replace("?g=150x150%23", "?g=300x300%23");
    }
}
