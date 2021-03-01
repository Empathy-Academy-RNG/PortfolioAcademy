//Simulate typewriter style
const textToSimulate = $("#mainTitle").text();
const lettersToSimulate = textToSimulate.split("");
const alreadyVisited = sessionStorage.getItem("already_visited");
let verticalLine = "<div id='verticalLine'></div>";

$(document).ready(function() {

  if(!alreadyVisited){
    sessionStorage.setItem("already_visited", true);
  }else{
    const mainTitle =  $("#mainTitle");
    mainTitle.text("Raúl Núñez García");
    mainTitle.css("display", "block");
    $("li").addClass("linkWithHoverBorder");
    return;
  }

  activateBorders();
  let randomModifier = Math.floor(Math.random() * (300 - 200 + 1)) + 200;
  console.log(randomModifier);
  lettersToSimulate.forEach(function enterSlowly(element, index, array){
    setTimeout(function(){
      if(index !== 0){
        $("#verticalLine").remove();
      }
      let textToAppend = element + verticalLine;
      $("#secondTitle").append(element + verticalLine);
      if(index === lettersToSimulate.length -1){
        blinkMarker();
      }
    }, randomModifier*index);
  });
});

function activateBorders(){
  //Change without borders on init
  $("li").addClass("linkWithHoverBorder");
}

function blinkMarker(){
  const fadeTime = 450;
  const verticalLine = $("div#verticalLine");
  verticalLine.fadeOut(fadeTime);
  verticalLine.fadeIn(fadeTime);
  verticalLine.fadeOut(fadeTime);
  verticalLine.fadeIn(fadeTime);
  verticalLine.fadeOut(fadeTime);
  setTimeout(simulateSelection, fadeTime*4);
}

function simulateSelection(){
  $("p#secondTitle").css("background-color", "rgb(179,216,253)");
  setTimeout(simulateBold, 400);
}

function simulateBold(){
  const secondTitle = $("p#secondTitle");
  secondTitle.css("background-color", "transparent");
  secondTitle.css("font-weight", "bolder");
}
