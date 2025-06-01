document.addEventListener('DOMContentLoaded', function () {
  // Получаем элементы DOM
  const trigger = document.getElementById('servicesTrigger');
  const modal = document.getElementById('servicesModal');
  const closeBtn = document.querySelector('.close');

  // Открываем модальное окно при клике на триггер
  trigger.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  // Закрываем модальное окно при клике на крестик
  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  // Закрываем модальное окно при клике вне его области
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
