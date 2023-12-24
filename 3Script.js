function validateForm() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var passwordError = document.getElementById("passwordError");

  if (password !== confirmPassword) {
    passwordError.innerHTML = "Passwords do not match!";
  } else {
    passwordError.innerHTML = "";
    document.getElementById("signupForm").reset();

    window.location.href = "Home.html";
  }

  return false;
}
