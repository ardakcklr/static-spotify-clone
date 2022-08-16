
/*var icons = document.getElementsByClassName("sidebar_nav");
for (var i = 0; i < icons.length; i++) {
    icons[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
});}*/


/*
var icons = document.getElementsByClassName("sidebar_nav");
for (var i = 0; i < icons.length; i++) {
    icons[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("sidebar_nav active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    alert(document.activeElement);
});}*/

var icons = document.getElementsByClassName("sidebar_nav");
for (var i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}

function changeIcon() {
    if (icons[i] === document.activeElement) {
        var rect = document.getElementsByClassName("hidden_rect")[i];
        rect.style.visibility= "visible";
        document.getElementById("home").style.opacity = "1";
        document.querySelector(".home_image_loc svg:first-of-type").style.visibility ="hidden";
        document.querySelector(".home_image_loc svg:last-of-type").style.visibility ="visible";
        document.querySelector(".home_image_loc svg:last-of-type").style.opacity="1";

    }
    
  }


document.getElementsByClassName("sidebar").addEventListener("mouseover", mouseOver);
document.getElementsByClassName("sidebar").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementsByClassName("sidebar").style.overflow = "auto";
  document.getElementsByClassName("main_page").style.overflow="hidden";
}

function mouseOut() {
  document.getElementsByClassName("sidebar").style.overflow= "hidden";
  document.getElementsByClassName("main_page").style.overflow="auto";
}


