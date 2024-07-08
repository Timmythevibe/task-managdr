document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('task-title').value;
    const body = document.getElementById('task-body').value;

    addTask(title, body);

    document.getElementById('task-title').value = '';
    document.getElementById('task-body').value = '';
});

function addTask(title, body) {
    const taskContainer = document.getElementById('tasks');

    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'content';
    contentDiv.innerHTML = `<h3>${title}</h3><p>${body}</p>`;

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'actions';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => editTask(taskDiv, title, body));

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => taskDiv.remove());

    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);

    taskDiv.appendChild(contentDiv);
    taskDiv.appendChild(actionsDiv);

    taskContainer.appendChild(taskDiv);
}

function editTask(taskDiv, oldTitle, oldBody) {
    const newTitle = prompt('Edit Task Title', oldTitle);
    const newBody = prompt('Edit Task Body', oldBody);

    if (newTitle !== null && newBody !== null) {
        taskDiv.querySelector('.content').innerHTML = `<h3>${newTitle}</h3><p>${newBody}</p>`;
    }
}
