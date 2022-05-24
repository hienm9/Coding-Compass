async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/results/');
      } else {
        alert("The user does not exist");
      }
    }
    else {
      alert("Please enter your login credentials!")
    }
  }

  
  document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
  