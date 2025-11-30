// Wait for the HTML document to fully load
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // In-memory tasks array (keeps sync with localStorage)
    let tasks = [];

    // Save current tasks array to localStorage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Create a DOM element for a task and append it to the list
    // Does NOT modify the tasks array or localStorage.
    function createTaskElement(taskText) {
        const li = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        // Remove task on click: remove from DOM and update tasks + localStorage
        removeBtn.onclick = () => {
            // Remove li from DOM
            if (taskList.contains(li)) {
                taskList.removeChild(li);
            }

            // Remove first matching occurrence from tasks array
            const idx = tasks.indexOf(taskText);
            if (idx > -1) {
                tasks.splice(idx, 1);
                saveTasks();
            }
        };

        li.appendChild(taskSpan);
        li.appendChild(removeBtn);

        taskList.appendChild(li);
    }

    // Add a task. If text parameter is omitted, read from input.
    // If save is true, push to tasks array and save to localStorage.
    function addTask(textParam, save = true) {
        const taskText = (typeof textParam === 'string') ? textParam.trim() : taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create DOM element
        createTaskElement(taskText);

        if (save) {
            // Update in-memory array and persist
            tasks.push(taskText);
            saveTasks();
        }

        // Clear input (only when we used the input)
        if (typeof textParam !== 'string') {
            taskInput.value = '';
        }
    }

    // Load tasks from localStorage on startup
    function loadTasks() {
        const stored = JSON.parse(localStorage.getItem('tasks') || '[]');

        // Ensure tasks is an array
        if (Array.isArray(stored)) {
            tasks = stored.slice(); // copy
            tasks.forEach(taskText => {
                // create DOM elements for each saved task; don't re-save
                createTaskElement(taskText);
            });
        } else {
            tasks = [];
        }
    }

    // Event listeners
    addButton.addEventListener('click', () => addTask());
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Initialize
    loadTasks();
});
