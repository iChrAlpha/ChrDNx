function addStyle(url) {
    var d = document.createElement('link');
    d.rel = 'stylesheet';
    d.href = url;
    document.head.appendChild(d);
}

function addScript(url) {
    var d = document.createElement('script');
    d.src = url;
    d.async = false;
    document.body.appendChild(d);
}

function loadDisqus() {
    addScript('https://cdn.jsdelivr.net/npm/disqusjs@1.2/dist/disqus.min.js');
    addStyle('https://cdn.jsdelivr.net/npm/disqusjs@1.2/dist/disqusjs.min.css');
    addScript('https://cdn.jsdelivr.net/npm/chrdnx@1.4.3/js/disqusJS.min.js');
}

var runningOnBrowser = typeof window !== "undefined";
var isBot = runningOnBrowser && !("onscroll" in window) || typeof navigator !== "undefined" && /(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent);
var supportsIntersectionObserver = runningOnBrowser && "IntersectionObserver" in window;

setTimeout(function () {
    if (!isBot && supportsIntersectionObserver) {
        var disqus_observer = new IntersectionObserver(function(entries) {
            if (entries[0].isIntersecting) {
                loadDisqus();
                disqus_observer.disconnect();
            }
        });
        disqus_observer.observe(document.getElementById('disqus_thread'));
    } else {
        loadDisqus();
    }
}, 1);