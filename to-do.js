const addButton = document.querySelector("#addButton");

addButton.addEventListener("click", () => {
  var taskInput = document.getElementById("taskInput");
  let taskInputString = taskInput.value;
  var taskList = document.getElementById("taskList");
  let taskListItem = document.createElement("li");
      
  taskListItem.append(taskInputString);
  taskList.append(taskListItem);
  taskInput.value = "";

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
  });