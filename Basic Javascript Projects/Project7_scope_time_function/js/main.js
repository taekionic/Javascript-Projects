var x=10  //defining a global variable x
function addition() {
    var y=20; //defining a local variable y
    console.log (20 + x + y + "<br>"); //creating a console log which will show the results of the inner expression
}

function addition2() {
   console.log (20 + y); //because y was defined as a local variable in the function "addition," here it will return invalid in our console because y is not defined in the function "addition2"
}

addition();
addition2();


function scopetest() {
    if (new Date().getHours() < 19) { //returns hours  for the specified date
        document.getElementById("scope").innerHTML = "Hello there! It's still early!";
    }
}

function agetest() { //our age test function will allow a user to input their age and return whether they are old enough to vote.
    Age = document.getElementById("age").value;
    if (Age >= 18) { //defining our if statement. IF the inputted age is greater than or equal to 18, our function will return "you are old enough to vote"
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!"; //if the above is FALSE, and the inputted age is NOT greater than or equal to 18, then it will return "you are not old enough to vote!"
    }
    document.getElementById("how_old_are_you?").innerHTML = Vote; //here we call the element with the ID "how_old_are_you?" and instruct it to return the vote value returned by our function.
}

function timefunction() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!"
    }
    else if (Time >= 12 == Time < 18) { //else if defines a secondary if statement. When the IF statement is FALSE, our function will check for a secondary condition. If this is TRUE, it will return "It is afternoon" if it is FALSE, our function will print our else statement due to both if conditions being false.
        Reply = "It is Afternoon!"
    }
    else {
        Reply = "It is Evening time!"
    }
    document.getElementById("time_of_day").innerHTML = Reply;
}

