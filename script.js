// Wait for the HTML document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
        const addButton = document.getElementById('add-task-btn');
            const taskInput = document.getElementById('task-input');
                const taskList = document.getElementById('task-list');

                    // Function to add a new task
                        function addTask() {
                                const taskText = taskInput.value.trim(); // Get and trim input value

                                        if (taskText === "") {
                                                    alert("Please enter a task."); // Alert if input is empty
                                                                return;
                                                                        }

                                                                                // Create new list item
                                                                                        const li = document.createElement('li');
                                                                                                li.textContent = taskText;

                                                                                                        // Create remove button
                                                                                                                const removeBtn = document.createElement('button');
                                                                                                                        removeBtn.textContent = "Remove";
                                                                                                                                removeBtn.className = 'remove-btn';

                                                                                                                                        // Set up remove button functionality
                                                                                                                                                removeBtn.onclick = () => {
                                                                                                                                                            taskList.removeChild(li);
                                                                                                                                                                    };

                                                                                                                                                                            // Append remove button to the list item
                                                                                                                                                                                    li.appendChild(removeBtn);

                                                                                                                                                                                            // Append list item to the task list
                                                                                                                                                                                                    taskList.appendChild(li);

                                                                                                                                                                                                            // Clear input field
                                                                                                                                                                                                                    taskInput.value = "";
                                                                                                                                                                                                                        }

                                                                                                                                                                                                                            // Add task when "Add Task" button is clicked
                                                                                                                                                                                                                                addButton.addEventListener('click', addTask);

                                                                                                                                                                                                                                    // Add task when "Enter" key is pressed in the input field
                                                                                                                                                                                                                                        taskInput.addEventListener('keypress', (event) => {
                                                                                                                                                                                                                                                if (event.key === 'Enter') {
                                                                                                                                                                                                                                                            addTask();
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                                                        