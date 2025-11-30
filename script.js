// Wait for the HTML document to fully load
document.addEventListener('DOMContentLoaded', () => {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create list item
        const li = document.createElement('li');

        // Task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";

        // >>> REQUIRED: use classList.add()
        removeBtn.classList.add('remove-btn');

        // Remove task
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append elements
        li.appendChild(taskSpan);
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";
    }

    // Add task on click
    addButton.addEventListener('click', addTask);

    // Add task on Enter
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
