const chatWidget = document.querySelector('.chat-widget'),
      chatWidgetSide = document.querySelector('.chat-widget__side'),
      input = document.querySelector('.chat-widget__input'),
      chatWidgetMessages = document.querySelector('.chat-widget__messages'),
      time = new Date().toLocaleDateString([], {
        hour: '2-digit',
        minute: '2-digit'
      });

messagesRobot();

function messagesRobot() {
    let  messagesRobotArray = [
        'Здравствуйте! Переключил вас на специалиста. Не ждите его ответа. Он не хочет работать.',
        'Не хочу с вами разговаривать.',
        'Пока! Мы не ждем вашего обращения снова :)',
        'Я не понимаю, что вы хотите от меня.',
        'Как так-то??',
        'Понятно... Что и следовало ожидать...',
    ];

    Math.floor(Math.random() * messagesRobotArray.length);

    chatWidgetMessages.innerHTML += `
    <div class="message">
    <div class="message__time">${time}</div>
    <div class="message__text">${messagesRobotArray[Math.floor(Math.random() * messagesRobotArray.length)]}</div>
    </div>
    `;
}

function messageClient() {
    chatWidgetMessages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${time}</div>
      <div class="message__text">${input.value}</div>
  </div>
      `;
    input.value = "";
    messagesRobot();
  }

chatWidgetSide.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
});

input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && input.value.trim() !== '') {
        messageClient();
    }
});


