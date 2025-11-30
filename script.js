// Wait for the HTML document to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
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

        // Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Remove task on click
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        // Append text and button to li
        li.appendChild(taskSpan);
        li.appendChild(removeBtn);

        // Append li to list
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on Enter key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
}); // <-- closes DOMContentLoaded
