console.log(peopleArray);

var index = 0;
var numSquares = 19;
var divArray = [];


// walkthrough
// var CurrentPerson = 0;


$(document).ready(function(){
  appendDom();
  createButtons();
  buttonFunctionality();
  // clickOnBox();


// walkthrough
// for(var i = 0; i < peopleArray.length; i++){
//   appendPeople(peopleArray[i]);
// }
//
// showPerson();


}); // end document ready


// walkthrough
// $(".prev").on("click", function(){
//   currentPerson -= 1;
//   if(currentPerson < 0){
//     currentPerson = peopleArray.length - 1;
//   }
// showPerson();
// });
// $(".next").on("click", function(){
//   $(".container")fadeOut(2000, function(){
//     currentPerson += 1;
//     if(currentPerson >= peopleArray.length){
//       currentPerson = 0;
//     }
// });
// showPerson();
// $(".container").fadeIn(2000);
// });


// walkthrough
// function showPerson() {
//   for(var i = 0; i < peopleArray.length; i++) {
//     if(elementArray[i].data("id") === currentPerson){
//       showPerson();
//     }
//     else {
//       elementArray[i].hide();
//     }
//   } //end for
// } //end function


// function appendPeople(person, index){
// walkthrough
// function appendPeople(person) ....
// after children().last()
// $el.append("<p>" + person.name + "</p>");
// $el.append("<p>" + person.shoutout + "</p>");
// var $el = $(".container").children().last()
// $el.hide();  //hides people
// $el.data("id", index);
// elementArray.push($el);
// console.log($el.data());
// }


function appendDom() {
  for(var i = 0; i < numSquares; i++) {
    $(".squareContainer").append("<div class='square' data-id='" + i + "'></div>");
    var $el = $(".squareContainer").children().last();
    divArray.push($el);
  }
    highlightIndex();
}

function highlightIndex(){
  for(var i = 0; i < divArray.length; i++) {
    if(divArray[i].data("id") == index) {
      divArray[i].addClass("highlight");
      $(".studentName").text(peopleArray[i].name);
      $(".shoutout").text(peopleArray[i].shoutout);
      $(".counter").text("ChiYak " + (i + 1 ) + " /19");
    }
    if(divArray[i].data("id")!= index) {
      divArray[i].removeClass("highlight");
    }
  } // end for loop
} // end highlightIndex function

function createButtons(){
  $(".buttonContainer").append("<button class='prevButton'>Prev</button>");
  $(".buttonContainer").append("<button class='nextButton'>Next</button>");
}

function buttonFunctionality(){
  $(".nextButton").on("click", function() {
    if (index == numSquares - 1) {
      index = 0;
      highlightIndex();
    }
    else {
      index ++;
    highlightIndex();
    }

  });
  $(".prevButton").on("click", function() {
    if(index === 0) {
      index = numSquares - 1;
      highlightIndex();
    }
    else {
    index --;
    highlightIndex();
    }
  });
} //end buttonFunctionality


// function clickOnBox(){
//   $(".square").on("click", function(){
//     index
//     highlightIndex();
//   });
// }
