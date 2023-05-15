function validateForm() {
  let username = document.forms["contactForm"]["username"].value;
  let email = document.forms["contactForm"]["email"].value;
  let msg = document.forms["contactForm"]["message"].value;
  if (username == "") {
    document.getElementById("errName").value = "Name must be filled out";
	document.forms["contactForm"]["username"].focus();
    return false;
  } else if (email == "" && username != "") {
  document.getElementById("errName").value = "";
	document.getElementById("errEmail").value = "Email must be filled out";
	document.forms["contactForm"]["email"].focus();
    return false;
  } else if (msg == "" &&  email != "") {
    document.getElementById("errEmail").value = "";
	document.getElementById("errMsg").value = "Message must be filled out";
	document.forms["contactForm"]["message"].focus();
    return false;
  } else if (msg != "") {
  document.getElementById("errMsg").value = "";
  document.forms["contactForm"]["message"].focus();
    return true;
  }
}