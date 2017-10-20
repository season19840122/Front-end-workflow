    "use strict";

    require.config({
      paths: {
        jquery: "scripts/jquery-3.1.1.min",
        iscroll: "scripts/iscroll.min",
        listloading: "scripts/listloading.min"
      }
    });

    require([ "jquery", "iscroll", "listloading" ], function() {
      var Listloading = require("listloading");
      var m = 15;
      var hei = $(window).height();
      $("#listloading, .listloadingClass").height(hei);
      var createHtml = function createHtml() {
        var __html = "";
        /*!$.ajax({
      type: 'POST',
      url: '',
      dataType: 'json',
      timeout: 3000,
      async: false,
      success: function(data){*/
        var data = {
          count: 1
        };
        for (var i = 0; i < 10; i++) {
          __html += '<li>\n              <div class="list">\n                <div class="head"><img src="' + data.count + '.png" alt=""></div>\n                <div class="name-wrap">\n                  <div class="layer"><span class="name">' + data.count + '<img src="' + data.count + '.png" alt=""></span></div>\n                  <div class="layer"><span class="win">胜率：' + data.count + '</span><span class="level">' + data.count + '</span><span class="zone">' + data.count + '</span></div>\n                  <div class="layer">\n                    <div class="progress-bar">\n                      <div class="progress" style="width:' + data.count + '%"></div>\n                    </div>\n                  </div>\n                </div>\n                <div class="a-wrap"><a class="encourage" href="###"><img src="' + data.count + '" alt=""></a><a class="just none" href="###">已打气</a></div>\n              </div>\n            </li>';
        }
        /*!},
     error: function(err) {
      //如果不传递error，调用公用异常提示
      alert(err + '调用异常');
    }
    });*/
        return __html;
      };
      var listloading = new Listloading("#listloading", {
        disableTime: true,
        pullUpAction: function pullUpAction(cb) {
          m--;
          var flg = false;
          var __html = createHtml();
          if (m < 1) {
            flg = true;
          } else {
            $("#order-list").append(__html);
          }
          cb(flg);
        },
        pullDownAction: function pullDownAction(cb, flg) {
          if (flg) {
            console.log("默认加载");
          } else {
            console.log("第二次加载");
            window.location.reload();
          }
          m = 5;
          cb();
        },
        upLoadmoretxt: "上拉加载更多",
        pullDrefreshtxt: "下拉刷新...",
        loaderendtxt: "已结加载完成",
        iscrollOptions: {
          mouseWheel: false,
          scrollbars: false
        }
      });
      $("#listloading2").height(hei);
      var listloading2 = new Listloading("#listloading2", {
        disableTime: true,
        pullDownAction: function pullDownAction(cb, flg) {
          if (flg) {
            console.log("默认加载");
          } else {
            console.log("第二次加载");
            window.location.reload();
          }
          cb();
        },
        pullDrefreshtxt: "下拉刷新...",
        loaderendtxt: "已结加载完成",
        iscrollOptions: {
          mouseWheel: false,
          scrollbars: false
        }
      });
    });