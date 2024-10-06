let tasks = [];

function loadTasks() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    tasks.forEach((task) => addTaskToDOM(task));
  }
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTaskToDOM(task) {
  const taskList = document.getElementById("taskList");
  const taskItem = document.createElement("li");
  if (task.completed) {
    taskItem.classList.add("completed");
  }
  taskItem.textContent = task.name;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = task.completed ? "Undo" : "Complete";
  completeBtn.classList.add("complete-btn");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  taskItem.appendChild(completeBtn);
  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);

  completeBtn.addEventListener("click", () => {
    task.completed = !task.completed;
    taskItem.classList.toggle("completed");
    completeBtn.textContent = task.completed ? "Undo" : "Complete";
    saveTasks();
  });

  deleteBtn.addEventListener("click", () => {
    tasks = tasks.filter((t) => t !== task);
    taskList.removeChild(taskItem);
    saveTasks();
  });
}

function addTask() {
  const tasInput = document.getElementById("taskInput");
  const taskName = taskInput.value.trim();

  if (taskName === "") {
    alert("Please enter a task");
    return;
  }
  const newTask = {
    name: taskName,
    complete: false,
  };

  tasks.push(newTask);
  addTaskToDOM(newTask);
  saveTasks();
  taskInput.value = "";
}

function setupEventListeners() {
  const addTaskBtn = document.getElementById("addTaskBtn");
  addTaskBtn.addEventListener("click", addTask);

  document.getElementById("taskInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
}

function init() {
  loadTasks();
  setupEventListeners();
}

document.addEventListener("DOMContentLoaded", init);
