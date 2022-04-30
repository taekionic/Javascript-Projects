function vehicle() { //defines our function vehicle. This will allow us to initiate an event that returns a specified value on click.
    var car = {  //Here, we are defining our dictionary. Our dictionary is for our object, car
        Model:"Ferrari", //the following values within the {} brackets are our key-value pairs. These serve to define various attributes of our object.
        Color:"black",
        Sound:"vroomvroom"
    };
    delete car.Color;
    document.getElementById('Dictionary').innerHTML = car.Sound;
}

function vehicle2() {
    var car = {
        Model:"Ferrari",
        Color:"black",
        Sound:"vroomvroom"
    };
    delete car.Color; //this operator will delete the Color value from our dictionary. When we click on our page to see the color of our car, it will return "undefined" because we are deleting the value.
    document.getElementById('Dictionary2').innerHTML = car.Color;
}