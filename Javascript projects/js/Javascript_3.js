function displayType(superpower) {
    var superpowerType = superpower.getAttribute("data-superpower-type");
    alert(superpowerType + " is one of the superpowers of " + superpower.innerHTML + "!");
}