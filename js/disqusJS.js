window.disqus_config = function () {
    this.page.url = disqus_page_url;
    this.page.identifier = disqus_page_identifier;
}
new DisqusJS({
    shortname: 'chralpha',
    siteName: 'ChrAlpha 的幻想乡',
    api: 'https://disqusjs.ml/api/',
    apikey: 'a18bsKZH3l4wu9IV7RQpjdQPWaiFOeeW1HKFIXDhP6gXK39W84memwrq6hLN2Ipx',
    admin: 'chralpha',
    identifier: disqus_page_identifier,
    url: disqus_page_url,
    nesting: 2
});
