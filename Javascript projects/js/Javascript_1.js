function animalfunction() {
    var animal_output;
    var animals = document.getElementById("animals").value;
    var animalcomment = " are awesome animals!";
    switch(animals) {
        case "Dogs":
            animal_output = "Dogs" + animalcomment;
        break;
        case "Cats":
            animal_output = "Cats" + animalcomment;
        break;
        case "Frogs":
            animal_output = "Frogs" + animalcomment;
        break;
        case "Horses":
            animal_output = "Horses" + animalcomment;
        break;
        case "Pigs":
            animal_output = "Pigs" + animalcomment;
        break;
        default:
        animal_output = "Please enter an animal exactly as written above."
    }
    document.getElementById("result").innerHTML = animal_output;
}

function textchange() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "The Text has changed!"
}
function canvasdrawtest() {
    var c = document.getElementById("canvastest");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(250,250,250,0,4 * Math.PI);
    ctx.stroke();
}

function canvasgradient() {
    var c = document.getElementById("gradienttest");
    var ctx = c.getContext("2d")
    var grd = ctx.createLinearGradient(50,0,170,450);
    grd.addColorStop(0, "blue");
    grd.addColorStop(1, "white");
    

    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 450, 450);
}