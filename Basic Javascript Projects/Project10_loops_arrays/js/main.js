function call_loop() {
    var Digit = "";
    var x = 0;
    while (x <11) {
        Digit += "<br>" + x;
        x++
    }
    document.getElementById("loop").innerHTML = Digit;
    
}

function textlength() {
    let text = "hello world"
    let length = text.length;
    document.getElementById("test1").innerHTML = text;
    document.getElementById("test2").innerHTML = length;
}

var Instruments = ["guiter","drums","piano","bass","violin","trumpet","flute"];
var Content = "";
var y;
function for_loop() {
    for (y = 0; y < Instruments.length; y++) {
        Content += Instruments[y] + "<br>";
    }
    document.getElementById("forloop").innerHTML = Content;
}

function space_pics() {
    var Space_Picture = [];
    Space_Picture[0] = "Pillars of Creation"
    Space_Picture[1] = "theoretical Dyson Sphere"
    Space_Picture[2] = "International Space Station"
    Space_Picture[3] = "Martian surface"
    document.getElementById("space").innerHTML = "This is a picture of the " + Space_Picture[0] + ".";
}

function constant_function() {
    const Car_type = {red:"Tesla", blue:"Honda", green:"Toyota"};
    Car_type.red = "Ford";
    Car_type.yellow = "Ferrari";
   
    document.getElementById("constant").innerHTML = "The red car is a " + Car_type.red + "." + "If you don't mind yellow, get a " + Car_type.yellow + "!";

}

function let_function() {
    var x = 25;
    {
        let x = 236;
        document.write(x);
        "<br>"
    }
    document.write(x);
}

function returntest() {
    var x = myFunction(4,12);
    document.getElementById("return").innerHTML = x;
    function myFunction(a,b) {
        return a*b;

    }
}

function objectmethod() {
    let car = {
        make: "Dodge ",
        model: "Viper ",
        year: "2021 ",
        color: "red ",
        description : function() {
            return "The car is a " + this.year + this.color + this.make + this.model;
        }
    };
    document.getElementById("car_object").innerHTML = car.description();
}

function  breaktest() { // here we are testing the break function 
    for (i=0; i < 10; i++) {
        if (i===4) {
            document.getElementById("break").innerHTML = i;
            i++;
            break; //the break statement here will terminate the loop when our i value is 4
        }
    }
    
}

function continuetest() {
    for (i=0; i < 10; i++) {
        if (i==4) {
            i++;
            continue; //the continue statement allows us to omit one iteration of a loop. Here, our loop will execute for all iterations where i =/= 4. 
        }
        document.getElementById("continue").innerHTML = i;
    }
      
}

