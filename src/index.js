document.addEventListener("DOMContentLoaded", () => {
// Grab all the DOM

// Form stuff and inputs
const newTaskForm = document.getElementById('create-task-form');
const newTaskDescription = document.getElementById('new-task-description');
const newTask = document.getElementById('new-task');


// ul where the new task will live
const newTaskUl = document.getElementById('tasks');


// attach event Listeners
newTaskForm.addEventListener('submit', createNewTask);

});

const createNewTask = event => {
  event.preventDefault();
  //Stop form from trying to submit

  const newTaskDescription = document.getElementById('new-task-description');
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
  };

