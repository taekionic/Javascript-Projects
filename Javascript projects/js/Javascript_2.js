function validateForm() {
    let x = document.forms["formmaster"]["Email"].value;
    if (x == "") {
      alert("E-mail box must be filled out");
      return false;
    }
  }