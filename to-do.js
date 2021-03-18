
document.querySelector("#addButton")
.addEventListener("click", () => {
  let taskInput = document.getElementById("taskInput");
  let taskInputString = taskInput.value;
  let taskList = document.getElementById("taskList");
  let taskListItem = document.createElement("li");
      
  taskListItem.append(taskInputString);
  
    taskListItem.addEventListener("click", (e) => {
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