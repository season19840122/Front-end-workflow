(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-news_hot_fill_light" viewBox="0 0 1024 1024">'+""+'<path d="M785.066667 85.333333H241.066667C192 85.333333 149.333333 128 149.333333 177.066667v672c0 49.066667 40.533333 89.6 89.6 89.6 4.266667 0 6.4 0 10.666667-2.133334L512 791.466667l262.4 145.066666c2.133333 2.133333 6.4 2.133333 10.666667 2.133334 49.066667 0 89.6-40.533333 89.6-89.6V177.066667C874.666667 128 834.133333 85.333333 785.066667 85.333333zM704 618.666667H320c-12.8 0-21.333333-8.533333-21.333333-21.333334s8.533333-21.333333 21.333333-21.333333h384c12.8 0 21.333333 8.533333 21.333333 21.333333s-10.666667 21.333333-21.333333 21.333334z m0-149.333334H320c-12.8 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333333h384c12.8 0 21.333333 8.533333 21.333333 21.333333s-8.533333 21.333333-21.333333 21.333333z m0-149.333333H320c-12.8 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333334h384c12.8 0 21.333333 8.533333 21.333333 21.333334s-8.533333 21.333333-21.333333 21.333333z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-news_hot_light" viewBox="0 0 1024 1024">'+""+'<path d="M785.066667 85.333333H241.066667C192 85.333333 149.333333 128 149.333333 177.066667v672c0 49.066667 40.533333 89.6 89.6 89.6 4.266667 0 6.4 0 10.666667-2.133334L512 791.466667l262.4 145.066666c2.133333 2.133333 6.4 2.133333 10.666667 2.133334 49.066667 0 89.6-40.533333 89.6-89.6V177.066667C874.666667 128 834.133333 85.333333 785.066667 85.333333zM832 849.066667c0 23.466667-19.2 44.8-42.666667 46.933333l-268.8-147.2c0-2.133333-4.266667-2.133333-8.533333-2.133333s-6.4 0-10.666667 2.133333L236.8 896c-23.466667-2.133333-42.666667-23.466667-42.666667-46.933333V177.066667C192 151.466667 215.466667 128 241.066667 128h544C810.666667 128 832 151.466667 832 177.066667v672z"  ></path>'+""+'<path d="M320 320h384c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-21.333333-21.333334H320c-12.8 0-21.333333 8.533333-21.333333 21.333334s10.666667 21.333333 21.333333 21.333333zM320 469.333333h384c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-21.333333-21.333333H320c-12.8 0-21.333333 8.533333-21.333333 21.333333s10.666667 21.333333 21.333333 21.333333zM706.133333 576h-384c-12.8 0-21.333333 8.533333-21.333333 21.333333s8.533333 21.333333 21.333333 21.333334h384c12.8 0 21.333333-8.533333 21.333334-21.333334s-10.666667-21.333333-21.333334-21.333333z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-favor_fill_light" viewBox="0 0 1024 1024">'+""+'<path d="M915.2 413.866667c-4.266667-14.933333-19.2-25.6-34.133333-29.866667l-228.266667-34.133333-100.266667-215.466667c-6.4-14.933333-21.333333-25.6-38.4-25.6s-32 8.533333-38.4 23.466667l-106.666666 215.466666L142.933333 384c-14.933333 2.133333-27.733333 12.8-34.133333 27.733333-4.266667 14.933333-2.133333 32 10.666667 42.666667l166.4 172.8-38.4 238.933333c-2.133333 17.066667 4.266667 32 17.066666 42.666667 12.8 8.533333 32 10.666667 44.8 2.133333l202.666667-110.933333 202.666667 113.066667c6.4 4.266667 12.8 6.4 21.333333 6.4s17.066667-2.133333 23.466667-8.533334c12.8-8.533333 19.2-25.6 17.066666-40.533333l-38.4-241.066667 166.4-170.666666c10.666667-12.8 14.933333-29.866667 10.666667-44.8z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-round_close_light" viewBox="0 0 1024 1024">'+""+'<path d="M512 83.2c-234.666667 0-426.666667 192-426.666667 426.666667s192 426.666667 426.666667 426.666666 426.666667-192 426.666667-426.666666-192-426.666667-426.666667-426.666667z m0 810.666667c-211.2 0-384-172.8-384-384s172.8-384 384-384 384 172.8 384 384c0 213.333333-172.8 384-384 384z"  ></path>'+""+'<path d="M674.133333 345.6c-8.533333-8.533333-21.333333-8.533333-29.866666 0l-134.4 134.4-134.4-134.4c-8.533333-8.533333-21.333333-8.533333-29.866667 0-8.533333 8.533333-8.533333 21.333333 0 29.866667l134.4 134.4-134.4 134.4c-8.533333 8.533333-8.533333 21.333333 0 29.866666 4.266667 4.266667 10.666667 6.4 14.933333 6.4 6.4 0 10.666667-2.133333 14.933334-6.4l136.533333-134.4 134.4 134.4c4.266667 4.266667 10.666667 6.4 14.933333 6.4 6.4 0 10.666667-2.133333 14.933334-6.4 8.533333-8.533333 8.533333-21.333333 0-29.866666l-134.4-134.4 134.4-134.4c6.4-8.533333 6.4-21.333333-2.133334-29.866667z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-round_close_fill_light" viewBox="0 0 1024 1024">'+""+'<path d="M514.133333 85.333333c-238.933333 0-426.666667 187.733333-426.666666 426.666667C87.466667 746.666667 277.333333 938.666667 512 938.666667c234.666667 0 426.666667-192 426.666667-426.666667 0-236.8-192-426.666667-424.533334-426.666667z m162.133334 558.933334c8.533333 8.533333 8.533333 21.333333 0 29.866666-4.266667 4.266667-10.666667 6.4-14.933334 6.4-6.4 0-10.666667-2.133333-14.933333-6.4L512 539.733333l-136.533333 134.4c-4.266667 4.266667-10.666667 6.4-14.933334 6.4-6.4 0-10.666667-2.133333-14.933333-6.4-8.533333-8.533333-8.533333-21.333333 0-29.866666l134.4-134.4-134.4-134.4c-8.533333-8.533333-8.533333-21.333333 0-29.866667 8.533333-8.533333 21.333333-8.533333 29.866667 0l134.4 134.4 134.4-134.4c8.533333-8.533333 21.333333-8.533333 29.866666 0 8.533333 8.533333 8.533333 21.333333 0 29.866667l-134.4 134.4 136.533334 134.4z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)