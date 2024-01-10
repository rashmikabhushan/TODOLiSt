const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const totalTasks = document.getElementById('totalTasks');

let taskId = 1;

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" id="task-${taskId}">
        <label for="task-${taskId}">${taskText}</label>
        <button class="delete-button">Delete</button>
    `;
    taskId++;
    taskList.appendChild(li);

    updateTotalTasks();
    taskInput.value = '';
}

function deleteTask(event) {
    const li = event.target.closest('li');
    li.remove();
    updateTotalTasks();
}

function toggleTask(event) {
    const li = event.target.closest('li');
    li.classList.toggle('checked');
}

function updateTotalTasks() {
    totalTasks.textContent = taskList.childElementCount;
}

addButton.addEventListener('click', addTask);
taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-button')) {
        deleteTask(event);
    } else if (event.target.tagName === 'LABEL') {
        toggleTask(event);
    }
});

taskInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});