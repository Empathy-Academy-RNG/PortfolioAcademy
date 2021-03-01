$(window).on("load",function() {
    $(window).scroll(function() {
        let bottomOfWindow = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function() {
            let bottomOfContainer = $(this).offset().top + $(this).outerHeight();
            if (bottomOfContainer < bottomOfWindow) {
                if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
            }
        });
    }).scroll();
});

$(".hoverForReturn").hover(
    function() {
        const backImage = $('#goBackImage');
        backImage.addClass("goBackImageHovered");
        backImage.removeClass("goBackImageNotHovered");
        backImage.addClass("returnTextHover");
        backImage.removeClass("returnTextNotHover");

    }, function() {
        const backImage = $('#goBackImage');
        backImage.removeClass("goBackImageHovered");
        backImage.addClass("goBackImageNotHovered");
        backImage.removeClass("returnTextHover");
        backImage.addClass("returnTextNotHover");
    }
);
