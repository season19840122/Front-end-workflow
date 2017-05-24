"use strict";

(function(a) {
    return a + 1;
});

var GLOBAL = {
    show: function show($obj) {
        $obj.fadeIn(200);
        $(".masklayer").show();
    },
    hide: function hide($obj) {
        $obj.fadeOut(200);
        $(".masklayer").hide();
    }
};

(function($) {
    if (device.desktop()) {
        $(".bg04").addClass("pc");
        $(".footer").show();
    }
    $("body").on("click", ".masklayer, .dialog .btn-buy, .dialog .btn-cancel", function(event) {
        event.preventDefault();
        GLOBAL.hide($(".dialog"));
    });
    $("body").on("click", ".btn-wrap .btn:eq(0)", function(event) {
        event.preventDefault();
        GLOBAL.show($(".dialog").eq(0));
    });
    $("body").on("click", ".btn-wrap .btn:eq(1)", function(event) {
        event.preventDefault();
        GLOBAL.show($(".dialog").eq(1));
    });
})(jQuery);