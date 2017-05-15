'use strict';

(function (a) {
  return a + 1;
});

// 显示、隐藏弹出层
var GLOBAL = {
  show: function show($obj) {
    $obj.fadeIn(200);
    $('.masklayer').show();
  },
  hide: function hide($obj) {
    $obj.fadeOut(200);
    $('.masklayer').hide();
  }
};

;(function ($) {
  if (device.desktop()) {
    // 如果是 PC 端
    $('.bg04').addClass('pc');
    $('.footer').show();
  }

  // 隐藏弹层
  $('body').on('click', '.masklayer, .dialog .btn-buy, .dialog .btn-cancel', function (event) {
    event.preventDefault();
    GLOBAL.hide($('.dialog'));
  });

  // 代言VIP周卡
  $('body').on('click', '.btn-wrap .btn:eq(0)', function (event) {
    event.preventDefault();
    GLOBAL.show($('.dialog').eq(0));
  });

  // 代言VIP月卡
  $('body').on('click', '.btn-wrap .btn:eq(1)', function (event) {
    event.preventDefault();
    GLOBAL.show($('.dialog').eq(1));
  });
})(jQuery);