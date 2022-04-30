function Ride_function() {
    var Height, Can_ride;
    Height = document.getElementById("height").value;
    Can_Ride = (Height < 52) ? "You are too short":"you are tall enough";
    document.getElementById("ride").innerHTML = Can_Ride + " to ride";
}

function Vehicle(Make, Model, Year, Color) { // this is our object constuctor - or the framework for any new object of this type
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge","Viper",2020,"Red"); //here, we are defining different attributes of the class vehicle for different individuals. Jack has  a Make: Dodge; Model: Viper; Year: 2020; Color:Red
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford","Pinto", 1971, "Mustard");
function myfunction(){
    document.getElementById("keywordsandconstructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model + " manufactured in " Erik.Vehicle_Year;
}

function nested(){ //in this function, we are nesting two additional functions. When the initial function, nested is called, it identifies an element in our HTML and executes the first nested function count(), which prints in the designated element. The innermost function, plusone, adds the value of one to the starting variable we defined.
    document.getElementById("counting").innerHTML = count();
    function count() {
        var start = 0;
        function Plusone() {start += 1;}
        Plusone();
        return start;
    }
}
