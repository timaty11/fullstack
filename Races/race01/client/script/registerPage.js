const state = {
  register: {
    login: 0,
    email: 0,
    password: 0,
  },
};
const buttonChek = (button) => {
  console.log(state);

  if (
    state.register.email === 0 &&
    state.register.password === 0 &&
    state.register.login === 0
  ) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};
document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('http://localhost:8080/register').then(
    (response) => response.json()
  );
  const { logins, emails } = await fetch('http://localhost:8080/allData').then(
    (response) => response.json()
  );
  console.log(logins, emails);
  if (response.user !== 'No authorization') {
    window.location.href = '/';
  }

  const login = document.getElementById('login_name');
  const email = document.getElementById('email_name');
  const password = document.getElementById('password');
  const password_confirmation = document.getElementById('password_confirm');
  const button = document.getElementById('btn-go');
  login.addEventListener('blur', () => {
    if (!logins.includes(login.value)) {
      login.style.background = '#0fdf4ae8';
      state.register.login = 0;
    } else {
      login.style.background = '#f00';
      state.register.login = 1;
    }
    buttonChek(button);
  });
  email.addEventListener('blur', () => {
    if (!emails.includes(email.value)) {
      email.style.background = '#0fdf4ae8';
      state.register.email = 0;
    } else {
      email.style.background = '#f00';
      state.register.email = 1;
    }
    buttonChek(button);
  });
  password_confirmation.addEventListener('blur', () => {
    if (password.value === password_confirmation.value) {
      password.style.background = '#0fdf4ae8';
      password_confirmation.style.background = '#0fdf4ae8';
      state.register.password = 0;
    } else {
      password.style.background = '#f00';
      password_confirmation.style.background = '#f00';
      state.register.password = 1;
    }
    buttonChek(button);
  });
  button.addEventListener('click', async () => {
    if (login.value === '' || password.value === '') {
      alert('Введите логин и пароль');
    } else {
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: login.value,
          email: email.value,
          password: password.value,
        }),
      }).then((res) => res.json());
      console.log(response);
      if (response === 'correct') {
        window.location.href = '/';
      }
    }
  });
  console.log('Мать уважала бы вас за то, что вы зарегистрировались');
});
