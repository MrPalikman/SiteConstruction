document.getElementById('callback-submit').addEventListener('click', sendToTelegram);

function sendToTelegram() {
  const userName = document.getElementById('user-name').value.trim();
  const userPhone = document.getElementById('user-phone').value.trim();

  if (!userName || !userPhone) {
    alert('Пожалуйста, заполните все поля!');
    return;
  }

  const botToken = '7478261080:AAEkRdbuKECm8y_4XQV6SGC1Y9lwVV2UAUM';
  const chatId = '5012828203';

  const botTokenAdmin = '7889401999:AAEEpm86drZH4DpKW6Z9z-gdLeWuOqam3zA';
  const chatIdAdmin = '1898426198';

  const message = `📞 *Новая заявка на звонок!*  
    \n👤 *Имя:* ${userName}  
    \n📱 *Телефон:* ${userPhone}`;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
    message,
  )}&parse_mode=Markdown`;

  const urlAdmin = `https://api.telegram.org/bot${botTokenAdmin}/sendMessage?chat_id=${chatIdAdmin}&text=${encodeURIComponent(
    message,
  )}&parse_mode=Markdown`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) {
        alert('Спасибо! Мы скоро вам перезвоним.');
        document.getElementById('user-name').value = '';
        document.getElementById('user-phone').value = '';
      } else {
        alert('Ошибка отправки. Попробуйте позже.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Произошла ошибка. Попробуйте ещё раз.');
    });

  fetch(urlAdmin)
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) {
        alert('Спасибо! Мы скоро вам перезвоним.');
        document.getElementById('user-name').value = '';
        document.getElementById('user-phone').value = '';
      } else {
        alert('Ошибка отправки. Попробуйте позже.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Произошла ошибка. Попробуйте ещё раз.');
    });
}
