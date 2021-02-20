//Simulate typewriter style
let verticalLine = "<div id='bioVerticalLine'></div>";

$(document).ready(function() {
    simulateSelection();
});


function simulateSelection(){
    $("img.desaturatePhoto").addClass("saturatePhoto");
    $("a#proyectsLink").css("background-color", "rgb(179,216,253)");
    setTimeout(simulateLinking, 500);
}


function simulateLinking(){
    $("a#proyectsLink").css("text-decoration", "underline");
    $("a#proyectsLink").css("color", "#2980b9");
    $("a#proyectsLink").css("font-size", "1.3em");
    setTimeout(function(){$("a#proyectsLink").css("background-color", "white");},400);
}