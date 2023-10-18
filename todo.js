document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task-button");
    const taskList = document.getElementById("task-list");

    // Load tasks from local storage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function addTaskToList(taskText, index) {
        const taskItem = document.createElement("li");
        taskItem.classList.add("list-group-item");

        const taskTextElement = document.createElement("span");
        taskTextElement.textContent = taskText;

        const editButton = document.createElement("button");
        editButton.classList.add("btn", "btn-primary");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function () {
            const newText = prompt("Edit task:", taskText);
            if (newText !== null) {
                taskTextElement.textContent = newText;
                tasks[index] = newText;
                saveTasks();
            }
        });

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-danger");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            if (confirm("Are you sure you want to delete this task?")) {
                tasks.splice(index, 1);
                saveTasks();
                taskItem.remove();
            }
        });

        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
    }

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText) {
            tasks.push(taskText);
            saveTasks();
            addTaskToList(taskText, tasks.length - 1);
            taskInput.value = "";
        }
    });

    tasks.forEach(function (taskText, index) {
        addTaskToList(taskText, index);
    });
});
