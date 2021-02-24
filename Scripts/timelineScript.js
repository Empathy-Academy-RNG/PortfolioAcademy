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

$(".hoverForReturn").hover(
    function() {
        $('#goBackImage').addClass("goBackImageHovered");
        $('#goBackImage').removeClass("goBackImageNotHovered");
        $('#goBackText').addClass("returnTextHover");
        $('#goBackText').removeClass("returnTextNotHover");

    }, function() {
        $('#goBackImage').removeClass("goBackImageHovered");
        $('#goBackImage').addClass("goBackImageNotHovered");
        $('#goBackText').removeClass("returnTextHover");
        $('#goBackText').addClass("returnTextNotHover");
    }
);
