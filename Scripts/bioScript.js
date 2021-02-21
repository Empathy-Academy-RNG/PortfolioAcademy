$(document).ready(function() {
    simulateLinking();
    photoAnimation();
});

function simulateLinking(){
    $("a#proyectsLink").css("text-decoration", "underline");
    $("a#proyectsLink").css("color", "#2980b9");
}

function photoAnimation(){
    $('.spin').addClass("spinning");
    setTimeout(1000, animateImageFade());
}

function animateImageFade(){
    $("#photoBio").addClass("photoFadeIn");
    $("#photoBio").addClass("saturatePhoto");
}