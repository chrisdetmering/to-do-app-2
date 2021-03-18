document.querySelector("#addButton")
.addEventListener("click", () => {
  const taskInput = document.getElementById("taskInput");
  const taskInputString = taskInput.value;
  const taskList = document.getElementById("taskList");
  const taskListItem = document.createElement("li");
      
  taskListItem.append(taskInputString);
 
  taskListItem.addEventListener("click", (e) => {
    e.preventDefault();
    taskListItem.style.textDecoration = "line-through";
  });
    
  taskListItem.addEventListener("auxclick", (e) => {
    e.preventDefault();
    taskList.removeChild(taskListItem);
  });

  taskListItem.addEventListener("contextmenu", (e) => { 
    e.preventDefault(); 
  });

  taskList.append(taskListItem);
  taskInput.value = "";
});

//Save todos
const todos = [{}]; 

//add, delete, toggle
localStorage.setItem('todos', JSON.stringify(todos));

//get todos
const todos = JSON.parse(localStorage.getItem("todos"));