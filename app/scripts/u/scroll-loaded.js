require.config({
  paths: {
    'jquery': 'scripts/jquery-3.1.1.min'
    ,'iscroll': 'scripts/iscroll.min'
    ,'listloading': 'scripts/listloading.min'
    // ,'listloading': 'scripts/_listloading'
  }
});

require(['jquery', 'iscroll', 'listloading'], function(){
    var Listloading = require('listloading');
    var m = 15;
    var hei = $(window).height();
    // var defaultHtml = $('#order-list').html();
    // 创建iscroll之前必须要先设置父元素的高度，否则无法拖动iscroll
    $('#listloading, .listloadingClass').height(hei);

    // 打气
    var createHtml = function(){
      var __html = '';
      /*!$.ajax({
        type: 'POST',
        url: '',
        dataType: 'json',
        timeout: 3000,
        async: false,
        success: function(data){*/
          var data = {
            'count': 1
          }
          for(var i = 0; i < 10; i++){
            __html += `<li>
              <div class="list">
                <div class="head"><img src="${data.count}.png" alt=""></div>
                <div class="name-wrap">
                  <div class="layer"><span class="name">${data.count}<img src="${data.count}.png" alt=""></span></div>
                  <div class="layer"><span class="win">胜率：${data.count}</span><span class="level">${data.count}</span><span class="zone">${data.count}</span></div>
                  <div class="layer">
                    <div class="progress-bar">
                      <div class="progress" style="width:${data.count}%"></div>
                    </div>
                  </div>
                </div>
                <div class="a-wrap"><a class="encourage" href="###"><img src="${data.count}" alt=""></a><a class="just none" href="###">已打气</a></div>
              </div>
            </li>`;
          }
          
        /*!},
         error: function(err) {
          //如果不传递error，调用公用异常提示
          alert(err + '调用异常');
        }
      });*/
      return __html;
    };
    var listloading = new Listloading('#listloading', {
        disableTime: true,  // 是否需要显示时间
        pullUpAction : function(cb){   // 上拉加载更多
          m--;
          var flg = false;
          var __html = createHtml();
          if(m < 1){
            flg = true;
          }else{
            $('#order-list').append(__html);
          }
          // 这块很重要！数据加载完毕需要返回 flag 为 true 则为全部数据加载完毕，加载完毕就会有一个翻页的回弹效果，如果为 flag 就不会有个回弹效果
          cb(flg);
        },
        pullDownAction : function(cb, flg){  // 下拉刷新
          // true则为默认加载 false为下拉刷新
          if (flg) {
            console.log('默认加载');
          } else {
            console.log('第二次加载');
            window.location.reload();
          }
          m = 5;
          // 执行完执行方法之后必须执行回调 回调的作用是通知默认加载已经全部执行完毕，程序需要去创建iscroll或者做下拉刷新动作
          cb();
        },
        upLoadmoretxt: '上拉加载更多',
        pullDrefreshtxt: '下拉刷新...',
        loaderendtxt: '已结加载完成',
        // iscroll的API 
        iscrollOptions: {
          mouseWheel: false,
          scrollbars: false   // 显示iscroll滚动条
          // ,beforeScrollStart: function (e) {
          //   if ( this.scrollX > (this.scrollY + 5 ) ) {
          //     // user is scrolling the x axis, so prevent the browsers' native scrolling
          //     e.preventDefault();
          //   }
          // }
        }
    });

    // 记录
    $('#listloading2').height(hei);
    var listloading2 = new Listloading('#listloading2', {
      disableTime: true,  // 是否需要显示时间
      pullDownAction : function(cb, flg){  // 下拉刷新
        // true则为默认加载 false为下拉刷新
        if (flg) {
          console.log('默认加载');
        } else {
          console.log('第二次加载');
          window.location.reload();
        }
        // 执行完执行方法之后必须执行回调 回调的作用是通知默认加载已经全部执行完毕，程序需要去创建iscroll或者做下拉刷新动作
        cb();
      },
      pullDrefreshtxt: '下拉刷新...',
      loaderendtxt: '已结加载完成',
      // iscroll的API 
      iscrollOptions: {
        mouseWheel: false,
        scrollbars: false   // 显示iscroll滚动条
        // ,beforeScrollStart: function (e) {
        //   if ( this.scrollX > (this.scrollY + 5 ) ) {
        //     // user is scrolling the x axis, so prevent the browsers' native scrolling
        //     e.preventDefault();
        //   }
        // }
      }
    });

});


