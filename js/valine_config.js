'use strict'

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