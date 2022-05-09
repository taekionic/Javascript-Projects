function myFunction() {
    var x = document.getElementById("menuBG"); //selecting our order menu
    if (x.style.display === "none") { //creating a toggle between a block and hidden state
      x.style.display = "block"; 
    } else {
      x.style.display = "none";
    }
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

function getReceipt() {
  //This initializez our string so it can get passed from function to function, growing line by line into full receipt.
  var text1 = "<h3>You Ordered:</h3>"
  var runningTotal = 0;
  var sizeTotal = 0;
  var sizeArray = document.getElementsByClassName("size");
  for (var i=0; i<sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      var selectedSize = sizeArray[i].value;
      text1 = text1+selectedSize+"<br>";
    }
  }
  if (selectedSize === "Personal Pizza") {
    sizeTotal = 6;
  } else if (selectedSize === "Small Pizza") {
    sizeTotal = 8;
  } else if (selectedSize === "Medium Pizza") {
    sizeTotal = 10;
  } else if (selectedSize === "Large Pizza") {
    sizeTotal = 14;
  } else if (selectedSize === "Extra Large Pizza") {
    sizeTotal = 16;
  }
  runningTotal = sizeTotal;
  console.log(selectedSize+" = $"+sizeTotal+".00");
  console.log("size text1: "+text1);
  console.log("subtotal: $"+runningTotal+".00");
  //these variables will get passed on to each function
  getTopping(runningTotal,text1);
}

function getTopping(runningTotal,text1) {
  var toppingTotal = 0;
  var selectedTopping = [];
  var toppingArray = document.getElementsByClassName("toppings");
  for (var j = 0; j < toppingArray.length; j++) {
    if (toppingArray[j].checked) {
      selectedTopping.push(toppingArray[j].value);
      console.log("selected topping item: ("+toppingArray[j].value+")");
      text1 = text1+toppingArray[j].value+"br";
    }
  }
  var toppingCount = selectedTopping.length;
  if (toppingCount > 1) {
    toppingTotal = (toppingCount - 1);
  } else {
      toppingTotal = 0;
  }
  runningTotal = (runningTotal + toppingTotal);
  console.log("total selected topping items: "+toppingCount);
  console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
  console.log("topping text1: "+text1);
  console.log("Purchase Total: "+"$"+runningTotal+".00");
  document.getElementById("showText").innerHTML = text1;
  document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};