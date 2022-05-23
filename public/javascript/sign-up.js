 
  async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    //check empty password field  
    if(password == "") {
      document.getElementById("message").innerHTML = "**Fill the password please!";
      return false;
   }
  
  //minimum password length validation
   if(password.length < 4) {
      document.getElementById("message").innerHTML = "**Password length must be atleast 4 characters";
      return false;
   }

    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/results/');
      } else {
        alert(response.statusText);
      }
    }



}
  
  document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
