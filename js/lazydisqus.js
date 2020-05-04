async function addStyle(url) {
    var d = document.createElement('link');
    d.rel = 'stylesheet';
    d.href = url;
    document.head.appendChild(d);
}

async function addScript(url) {
    var d = document.createElement('script');
    d.src = url;
    d.async = false;
    document.body.appendChild(d);
}

async function mainLoading() {
    window.disqus_config = function () {
        this.page.url = disqus_page_url;
        this.page.identifier = disqus_page_identifier;
    }
    await new DisqusJS({
        shortname: 'chralpha',
        siteName: 'ChrAlpha 的幻想乡',
        api: 'https://dc.1amblog.ml/',
        apikey: 'a18bsKZH3l4wu9IV7RQpjdQPWaiFOeeW1HKFIXDhP6gXK39W84memwrq6hLN2Ipx',
        admin: 'chralpha',
        identifier: disqus_page_identifier,
        url: disqus_page_url,
        nesting: 2
    });
}

async function loadDisqus() {
    await addScript('https://cdn.jsdelivr.net/npm/disqusjs@1.2/dist/disqus.js');
    await addStyle('https://cdn.jsdelivr.net/npm/disqusjs@1.2/dist/disqusjs.css');
    await addScript('https://cdn.jsdelivr.net/npm/chrdnx@1.4.2/js/disqusJS.js');
}


var runningOnBrowser = typeof window !== "undefined";
var isBot = runningOnBrowser && !("onscroll" in window) || typeof navigator !== "undefined" && /(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent);
var supportsIntersectionObserver = runningOnBrowser && "IntersectionObserver" in window;

setTimeout(async function () {
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