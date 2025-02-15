document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Lütfen bir görev girin!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Tamamla';
    completeButton.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Sil';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
}