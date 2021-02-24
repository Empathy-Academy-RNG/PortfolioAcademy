$(window).on("load",function() {
    $(window).scroll(function() {
        var bottomOfWindow = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function() {
            var bottomOfContainer = $(this).offset().top + $(this).outerHeight();
            if (bottomOfContainer < bottomOfWindow) {
                if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
            }
        });
    }).scroll();
});