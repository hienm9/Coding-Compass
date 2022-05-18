function name() {
  var inputForUserName = document.getElementById("username").value;
  var inputsForPassword = document.getElementById("password").value;
  var inputsForEmail = document.getElementById("email").value;

  console.log(inputForUserName);
  console.log(inputsForPassword);
  console.log(inputsForEmail);
}

var saveButton = document.getElementById("save");

console.log(saveButton);

saveButton.addEventListener("click", name);


