document.write(typeof "String" + "&");
document.write(typeof 5);
document.write("10X" + 5);

function func() {
    document.getElementById("test").innerHTML = 0/0;
}

function isnantest() {
    document.getElementById("test2").innerHTML = isnantest('5')
}

function isnantest2() {
    document.getElementById("test3").innerHTML = isNaN('test');
}

function inf() {
    document.getElementById("inf").innerHTML;
    document.write(4E404)
}

function neginf() {
    document.getElementById("neginf").innerHTML;
    document.write(-4E404)
}

function booltest() {
    document.getElementById("booltestt").innerHTML;
    document.write(10>2);
}

function booltest2() {
    document.getElementById("booltestf").innerHTML;
    document.write(10<2);
}

console.log(10<2);

document.write(10==5) // == means "is equal to"
document.write(10==10)

x = 10
y = 10
z = "jimmy"
z2 = "jimmy"
z3 = "10"

document.write (x===y); //=== gives us a true or false output if matching variables do not have the same data TYPE AND the same data VALUE
document.write (x===z);
document.write (z===z2);
document.write (z===z3);

document.write(5>2 && 10>5); // && determines if the logic between two values are the same and outputs true or false if BOTH are either true or false. Because 5 IS greater than 2, and 10 IS greater than 5, we get true here. 
document.write(5<2 && 10>5);
document.write(1<2 && 2<5);

document.write(1<2 || 2<5); // || compares the logic of two values and outputs true or false if EITHER is true or false. 


function notfunction() {
    document.getElementById("not").innerHTML = !(20>10); // the ! function means IS NOT. This outputs true or false depending on the input. Here, we are saying 20 is NOT greater than 10, which is false.
    document.getElementById("not2").innerHTML = !(20>30);

}

