/**
 * 动态计算"HTML.fontSize"数值
 */
module.exports = function () {
}
;(function () {
    var dpr = window.devicePixelRatio;
    var meta = document.getElementsByName('viewport')[0];

    meta.setAttribute('content', 'width=device-width, initial-scale=' + 1 / dpr + ', maximum-scale=' + 1 / dpr + ', minimum-scale=' + 1 / dpr + ', user-scalable=no');

    var doc = document.documentElement;
    ///var pageWidth = document.documentElement.clientWidth;
    var pageWidth = 1440;
    var free = 90;

    doc.setAttribute('data-dpr', dpr);
    doc.style.fontSize = pageWidth / free + 'px';
    doc.style.width = '100%';
    doc.style.height = '100%';

    meta.$px2rem = function (val) {
        var rel = val.spilt('px')[0];
        var rem = pageWidth / free;
        return parseInt(rel, 10) / rem + 'rem';
    }
    // 苹果安卓设置字体
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
    var doc = document.documentElement;

    if (isiOS) {
        doc.style.fontFamily = 'PingFang-SC-Regular,Helvetica,sans-serif';
    }
    if (isAndroid) {
        doc.style.fontFamily = 'STXihei,Helvetica,sans-serif';
    }
})();


