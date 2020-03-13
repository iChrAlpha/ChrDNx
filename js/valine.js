function query(selector) {
    return Array.from(document.querySelectorAll(selector));
}
function loadValine() {
    var d = query('valine_conatainer')[0];
    var s = document.createElement('script');
    s.src = 'https://unpkg.com/valine/dist/Valine.min.js';
    document.body.appendChild(s);
    var valine = new Valine();
    valine.init({
        el: '#valine_container',
        notify: true,
        verify: true,
        appId: "FrtF1M9A3nUlChnLmbJX9v18-MdYXbMMI",
        appKey: "ys9ICHGqYfDlPhwk5VPNHjDk",
        placeholder: "填写邮箱方便收到动态通知哦~",
        pageSize:'10',
        avatar:'',
        lang:'zh-cn',
        visitor: 'false',
        highlight:'true'
    });
}
var io = new IntersectionObserver(function(entries) {
    // console.log('In IO');
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            // console.log('In loading');
            loadValine();
            io.disconnect();
        }
    })
});
query('#valine_container').forEach(function(item) {
    io.observe(item);
});