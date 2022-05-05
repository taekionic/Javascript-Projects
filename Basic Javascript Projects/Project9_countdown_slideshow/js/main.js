function countdown() {
    var seconds = document.getElementById("seconds").value; //referencing input from our input box

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000); //setting a ticker to the value of 1000 ms, or 1 second. 
        if (seconds == -1) { //defining an if function that will return the alert "times up" if our ticker attempts to count below 0
            alert("Time's up!");
            clearTimeout(time); //resets our timer
            timer.innerHTML = "";
        }
    }
    tick();
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n); //pushes our image forward or backward one index in our slideshow
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); //sets our slides and calls the relevant element by its defined class
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
