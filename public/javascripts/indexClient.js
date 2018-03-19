
function checkPasswordsMatch(){
  var pass1 = document.getElementById("up_password").value;
  var pass2 = document.getElementById("confpassword").value;

  if (pass1 !== pass2){
    alert("Passwords do not match");
  }

  else {
    alert("Sign In Success! \n\nNow Sign in with your new username and password");
  }
}
