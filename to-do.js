  const addButton = document.querySelector("#addButton");
  const OKButton = document.getElementById("OKButton");
  const cancelButton = document.getElementById("cancelButton");

    addButton.addEventListener("click", () => {
    var taskInput = document.getElementById("taskInput");
    var taskInputString = taskInput.value;
    var taskList = document.getElementById("taskList");
    var taskListItem = document.createElement("li");
    
    taskListItem.append(taskInputString);
    taskList.append(taskListItem);
    taskInputString.value = "";
    })

var taskListItem = document.getElementById("taskList");
var taskList = document.getElementById("taskList");
taskListItem.addEventListener("click", () => {
var prompt = window.prompt("1 = Done, 2 = Delete"); 
  if (prompt == 1) {
    taskListItem.style.textDecoration = "line-through";
  } else
  if (prompt == 2) {
    taskListItem.removeChild(taskList); //Uncaught DOMException: Node.removeChild: The node to be removed is not a child of this node
  }   
});
  //alert("abc");
