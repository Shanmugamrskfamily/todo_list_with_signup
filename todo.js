const currentYear = new Date().getFullYear();
      document.getElementById("copyright-year").textContent = currentYear;

document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task-button");
    const taskList = document.getElementById("task-list");
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
    function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  
    function addTaskToList(taskText, index, isDone) {
      const taskItem = document.createElement("li");
      taskItem.classList.add("list-group-item");
      
      if (isDone) {
        taskItem.classList.add("text-decoration-line-through");
        taskItem.style.color = "green";
      }
  
      const taskTextElement = document.createElement("span");
      taskTextElement.textContent = taskText;
  
      const markAsDoneButton = document.createElement("button");
      markAsDoneButton.classList.add("btn", "btn-success", "m-2");
      markAsDoneButton.textContent = isDone ? "Mark as Undone" : "Mark as Done";
  
      markAsDoneButton.addEventListener("click", function () {
        if (!isDone) {
          markTaskAsDone(taskItem);
        } else {
          unmarkTaskAsDone(taskItem);
        }
  
        isDone = !isDone;
        markAsDoneButton.textContent = isDone ? "Mark as Undone" : "Mark as Done";
        tasks[index].isDone = isDone;
        saveTasks();
      });
  
      const editButton = document.createElement("button");
      editButton.classList.add("btn", "btn-warning", "m-2", "text-white");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", function () {
        const newText = prompt("Edit task:", taskText);
        if (newText !== null) {
          taskTextElement.textContent = newText;
          tasks[index].taskText = newText;
          saveTasks();
        }
      });
  
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("btn", "btn-danger", "m-2");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function () {
        if (confirm("Are you sure you want to delete this task?")) {
          taskItem.remove();
          tasks.splice(index, 1);
          saveTasks();
        }
      });
  
      taskItem.appendChild(taskTextElement);
      taskItem.appendChild(markAsDoneButton);
      taskItem.appendChild(editButton);
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
    }
  
    function markTaskAsDone(taskItem) {
      taskItem.classList.add("text-decoration-line-through");
      taskItem.style.color = "green";
    }
  
    function unmarkTaskAsDone(taskItem) {
      taskItem.classList.remove("text-decoration-line-through");
      taskItem.style.color = "";
    }
  
    addTaskButton.addEventListener("click", function () {
      const taskText = taskInput.value.trim();
      if (taskText) {
        const isDone = false;
        tasks.push({ taskText, isDone });
        saveTasks();
        addTaskToList(taskText, tasks.length - 1, isDone);
        taskInput.value = "";
      }
    });
  
    tasks.forEach(function (task, index) {
      addTaskToList(task.taskText, index, task.isDone);
    });
  });
  