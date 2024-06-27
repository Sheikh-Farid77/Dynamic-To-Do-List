const addTask = () => {
   const taskInput = document.getElementById("task-input");
   const taskInputValue = taskInput.value.trim();
   if(taskInputValue !== ""){
    const taskListUl = document.getElementById("taskList");
    const li = document.createElement("li");
    li.innerHTML = '<input type="checkbox"> ' + taskInputValue + ' <button onclick="deleteTask(this)">Delete</button>';
    taskListUl.appendChild(li);
    taskInput.value = "";

   }else{
    alert("Please Add a Task");
   }
}

const deleteTask = (btn) => {
    const li = btn.parentNode;
    li.parentNode.removeChild(li);
}

const deletedCheckedTask = () => {
    const taskList = document.getElementById("taskList");
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkBoxes.forEach(checkBox =>{
        const li = checkBox.parentNode; 
        li.parentNode.removeChild(li);
    })
}