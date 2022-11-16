const input = document.getElementById('task__input'),
      button = document.getElementById('tasks__add'),
      toDoList = document.getElementById('tasks__list');

const createTask = () => {
    toDoList.innerHTML += `
          <div class="task">
            <div class="task__title">
              ${input.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
          </div>
        `;
};


button.addEventListener('click', (e) => {
    if (input.value.trim()) {
        e.preventDefault();
        createTask();
    } else {
        alert('Поле пустое');
    }
});

toDoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('task__remove')) {
        e.target.closest('.task').remove();
    }
});