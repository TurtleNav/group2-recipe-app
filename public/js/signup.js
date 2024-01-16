const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#inputUsername').value.trim();
  const email = document.querySelector('#inputEmail').value.trim();
  const password = document.querySelector('#inputPassword3').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document.querySelector('#signup').addEventListener('submit', signupFormHandler);
