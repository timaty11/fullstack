document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('http://localhost:8080/').then((response) =>
    response.json()
  );
  if (response.user === 'No authorization') {
    console.log('Мать уважала бы вас за то, что вы зарегистрировались');
  } else {
    document.getElementById(
      'index-text'
    ).innerText = `Hello ${response.login} you are welcome!`;
    document.getElementById('btn-start').onclick = () =>
      (window.location.href = '/fields');
    console.log('Мать оценила, что вы зарегистрировались ');
  }
});
