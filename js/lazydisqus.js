function loadDisqus() {
  var $$ = document;
  var s = $$.createElement('script');
  s.src = 'https://chralpha.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  ($$.head || $$.body).appendChild(s);
  window.disqus_config = function () {
    this.page.url = disqus_page_url;
    this.page.identifier = disqus_page_identifier;
  }
  new DisqusJS({
    shortname: 'chralpha',
    siteName: 'ChrAlpha 的幻想乡',
    api: 'https://disqus.skk.moe/disqus/',
    apikey: 'a18bsKZH3l4wu9IV7RQpjdQPWaiFOeeW1HKFIXDhP6gXK39W84memwrq6hLN2Ipx',
    admin: 'chralpha',
    identifier: disqus_page_identifier,
    url: disqus_page_url,
    nesting: 2
  });
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