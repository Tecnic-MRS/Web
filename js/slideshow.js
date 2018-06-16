var myIndex = 1;
carousel(myIndex);

// Next/previous controls
function plusSlides(n) {
  carousel(myIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  carousel(myIndex = n);
}

function carousel(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > x.length) {myIndex = 1} 
    if (n < 1) {myIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
      /* x[i].style.display = "none";  */
      dots[i].className = dots[i].className.replace(" active", "");
    }

    x[myIndex-1].style.display = "block"; 
    dots[myIndex-1].className += " active";
}