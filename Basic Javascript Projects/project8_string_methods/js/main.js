function fullsentence() {
    var part_1 = "This is ";
    var part_2 = "a concatenation test!"
    var whole_sentence = part_1.concat(part_2); //this defines a variable that is the concatenation of the two previously defined variables.
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

function slice_method() {
    var Sentence = "All work and no play makes Johnny a dully boy.";
    var Section = Sentence.slice(27,33); //this 'slices' a specific section of our string defined above. The values designate the start and end columns of the text we want to slice.
    document.getElementById("slice").innerHTML = Section.toUpperCase(); //toUpperCase returns our string as all Upper Case
    document.getElementById("search").innerHTML = Sentence.search("Johnny"); //this searches our string to specify which column it begins in.
}

function numtostr() {
    var x = 190
    document.getElementById("numbers_to_string").innerHTML = x.toString(); //this converts our number 190 into a string value.
}

function precision() {
    var x = 20153.24596326456
    document.getElementById("precisiontest").innerHTML = x.toPrecision(10); //this returns a specified Number object to a specified precision. Here, 10 defines how many digits of our number object we want to return, so only the first 10 digits will return.
}

function tofixedtest() {
    var x = 24.25005;
    document.getElementById("fixedtest").innerHTML = x.toFixed(3); //toFixed returns our number object as a string that has a specified number of digits after the decimal point. 
}

function valueoftest() {
    const i = "250.201055";
    const iObj = new String(i)
    const iObjprim = iObj.valueOf();
    document.getElementById("valuetest").innerHTML = iObjprim; //value of converts any object into its primitive value. Here, we are converting our const value into a string value.
    console.log(typeof i) //here we are printing the data types of our const values. i is a string, and iObj is shown as an object. Using the valueof function on iObj returns string.
    console.log(typeof iObj)
    console.log(typeof iObjprim) 
}