// import { setDate } from 'u/yearmonthday';

//! 常用工具函数
var GLOBAL = {
  show: function($obj) {
    $obj.fadeIn(200);
    $('.masklayer').fadeIn(200);
  },
  hide: function($obj) {
    $obj.fadeOut(200);
    $('.masklayer').fadeOut(200);
  },
  setDate: function(year, month, day){
    setDate(year, month, day);
  }
};