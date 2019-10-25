$(document).ready(function () {
$('#content').hide().fadeIn(3000);
// Reset the page on click
function resetPage(event) {
  var data = [
    "greeting",
    "userSign",
    "tiles",
    "subTotal",
    "shipping",
    "grandTotal"
  ];

  for (var i=0; i<data.length; i++) {
    setTextContentById(data[i], " ");
  }
  event.preventDefault();
}

// Initiate variables for the welcome message
function initiateVars() {
  greeting = "Howdy ";
  name = "Mr. Childers";
  message = ", please check your order:";
  welcome = greeting + name + message;
  sign = "Montague House";
  tiles = sign.length;
  subTotal = tiles * 5;
  shipping = 7;
  grandTotal = subTotal + shipping;
}

function setTextContentById(getId, setText) {
  // Get the element that has an id of greeting
  var el = document.getElementById(getId);
  // Replace the content of that element with the personalized welcome message
  el.textContent = setText;
}

function setText(){
  setTextContentById('greeting', welcome);
  setTextContentById('userSign', sign);
  setTextContentById('tiles', tiles);
  setTextContentById('subTotal', '$' + subTotal);
  setTextContentById('shipping', '$' + shipping);
  setTextContentById('grandTotal', '$' + grandTotal);
}

(function (){
  initiateVars();
  setText();
})();

var el = document.getElementById("resetButton");
el.addEventListener("click", resetPage);
})