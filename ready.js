function ready(callback) {
    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", callback, false);
        // If Internet Explorer, the event model is used
    } else if (document.attachEvent) {
        document.attachEvent("onreadystatechange", function() {
            if (document.readyState === "complete" ) {
                callback();
            }
        });
    } else {
        var oldOnload = window.onload;
        window.onload = function () {
            oldOnload && oldOnload();
            callback();
        }
    }
}

window.pageready = false;
ready(function(){window.pageready = true});
