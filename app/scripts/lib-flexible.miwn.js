/*
 * Filename: lib-flexible v0.3.4 修改版
 * Author: Season 朱迎春
 * Address: <script src="http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js"></script>
 * Creattime: 2016-09-12
 * PS: 防止大于设备独立像素分辨率宽度大于 540 px，统一重置为 540px。修改后的版本全平台自适应，当然首先浏览器得支持 REM
 */
!function(a,b){function s(){var b=d.getBoundingClientRect().width,c=b/10;d.style.fontSize=c+"px",j.rem=a.rem=c}var i,k,l,m,n,p,q,r,c=a.document,d=c.documentElement,e=c.querySelector('meta[name="viewport"]'),f=c.querySelector('meta[name="flexible"]'),g=0,h=0,j=b.flexible||(b.flexible={});e?(console.warn("将根据已有的meta标签来设置缩放比例"),k=e.getAttribute("content").match(/initial\-scale=([\d\.]+)/),k&&(h=parseFloat(k[1]),g=parseInt(1/h))):f&&(l=f.getAttribute("content"),l&&(m=l.match(/initial\-dpr=([\d\.]+)/),n=l.match(/maximum\-dpr=([\d\.]+)/),m&&(g=parseFloat(m[1]),h=parseFloat((1/g).toFixed(2))),n&&(g=parseFloat(n[1]),h=parseFloat((1/g).toFixed(2))))),g||h||(a.navigator.appVersion.match(/android/gi),p=a.navigator.appVersion.match(/iphone/gi),q=a.devicePixelRatio,g=p?q>=3&&(!g||g>=3)?3:q>=2&&(!g||g>=2)?2:1:1,h=1/g),d.setAttribute("data-dpr",g),e||(e=c.createElement("meta"),e.setAttribute("name","viewport"),e.setAttribute("content","initial-scale="+h+", maximum-scale="+h+", minimum-scale="+h+", user-scalable=no"),d.firstElementChild?d.firstElementChild.appendChild(e):(r=c.createElement("div"),r.appendChild(e),c.write(r.innerHTML))),a.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(s,300)},!1),a.addEventListener("pageshow",function(a){a.persisted&&(clearTimeout(i),i=setTimeout(s,300))},!1),"complete"===c.readyState?c.body.style.fontSize=12*g+"px":c.addEventListener("DOMContentLoaded",function(){c.body.style.fontSize=12*g+"px"},!1),s(),j.dpr=a.dpr=g,j.refreshRem=s,j.rem2px=function(a){var b=parseFloat(a)*this.rem;return"string"==typeof a&&a.match(/rem$/)&&(b+="px"),b},j.px2rem=function(a){var b=parseFloat(a)/this.rem;return"string"==typeof a&&a.match(/px$/)&&(b+="rem"),b}}(window,window["lib"]||(window["lib"]={}));