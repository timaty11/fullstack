document.addEventListener('DOMContentLoaded', async () => {
  const login = document.getElementById('login-register');
  const password = document.getElementById('password-register');
  const button = document.getElementById('btn-login');
  const response = await fetch('http://localhost:8080/login').then((response) =>
    response.json()
  );
  if (response.user === 'No authorization') {
    console.log('Мать уважала бы вас за то, что вы авторизирован');
  } else {
    window.location.href = '/';
  }

  button.addEventListener('click', async () => {
    console.log(login, password);
    if (login.value === '' || password.value === '') {
      alert('Введите логин и пароль');
    } else {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login: login.value, password: password.value }),
      }).then((response) => response.json());
      console.log(response);
      if (response.errorMass === 'User or uncorrect data') {
        login.style.background = '#f00';
        password.style.background = '#f00';
      } else {
        window.location.href = '/';
      }
    }
  });
});
