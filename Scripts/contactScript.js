$(".hoverForReturn").hover(
  function() {
      const imageBack = $('#goBackImage');
      imageBack.addClass("goBackImageHovered");
      imageBack.removeClass("goBackImageNotHovered");
      imageBack.addClass("returnTextHover");
      imageBack.removeClass("returnTextNotHover");

  }, function() {
        const imageBack = $('#goBackImage');
        imageBack.removeClass("goBackImageHovered");
        imageBack.addClass("goBackImageNotHovered");
        imageBack.removeClass("returnTextHover");
        imageBack.addClass("returnTextNotHover");
  }
);
