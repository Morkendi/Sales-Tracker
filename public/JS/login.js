const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.getElementById('email-login').value.trim();
    const password = document.getElementById('password-login').value.trim();
 
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');

      } else {
        alert('unable to login');
      }
    }
  };
  
  
document.getElementById('loginForm').addEventListener('submit', loginFormHandler);
  

  