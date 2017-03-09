console.log("hello");

var userOutput = document.getElementById("output-target");
var guineaPig = document.getElementById("guinea-pig");

// var outputSection = document.querySelectorAll(".article-section");


var outputElement = function(event){
  userOutput.innerHTML = `You clicked on the ${event.target.innerHTML} section`
  // console.log(event);
}

document.getElementById("article").addEventListener("click", outputElement);
// outputSection.addEventListener("click", outputElement);
var showTitle = function(event){
  userOutput.innerHTML = `You moved your mouse over the header`
}
document.getElementById("page-title").addEventListener("mouseEnter", hideTitle);

var hideTitle = function(event){
  userOutput.innerHTML = `You left me!!`
}
document.getElementById("page-title").addEventListener("mouseleave", hideTitle);

var currentText = function(event) {
  userOutput.innerHTML = event.target.value;
}

document.getElementById("keypress-input").addEventListener("keypress", currentText);


function colorChange(event) {
  guineaPig.classList.toggle("guinea-pig-color");
}
document.getElementById("add-color").addEventListener("click",colorChange);

function sizeChange(event) {
  guineaPig.classList.toggle("hulkify");
}
document.getElementById("make-large").addEventListener("click",sizeChange);

function addBorder(event){
  guineaPig.classList.toggle("border");
}
document.getElementById("add-border").addEventListener("click",addBorder);

function roundedCorner(event){
  guineaPig.classList.toggle("rounded");
}
document.getElementById("add-rounding").addEventListener("click",roundedCorner);
// var whereYouAre = function(event) {
//   outputEl.innerHTML = `You clicked here: ${event.target.innerHTML}`
// }
//
// document.getElementById("article").addEventListener("click", whereYouAre)
