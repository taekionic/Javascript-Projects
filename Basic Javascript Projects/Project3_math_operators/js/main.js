function math() {      //this function solves the defined problem. 
    var div = ((21/5)+10-3)*15; //with var, we are defining a variable named div that is = to a mathematical expression.
    document.getElementById('math'); //calling the appropriate element in our HTML
    document.write(div); //displaying our solution on button click
    
}

function incr() {
    var x = 20;
    x++;  // this is our increment operator. it increases the variable x by 1 increment.
    document.getElementById('math2');
    document.write(x);
    
}

function incr() {
    var x = 1;
    x--; //this is our decrement operator. It reduces our variable x by 1 increment.
    document.getElementById('math3');
    document.write(x);
    
}

function rand() {
    document.getElementById('math4') 
    document.write(Math.random() * 100); //the Math.random function returns a random number between 0 and 1. We multiply it by 100 to get any random number between 0 and 100
    
}

function rem() {
    var prob = 20/5
    var remainder = 21%5 // the %, also called the modulus function, returns the remainder of a division.
    document.getElementById('math5')
    document.write(prob + " with a remainder of " + remainder);
    
}
