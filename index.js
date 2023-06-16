function adicionarTarefa() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const taskText = taskInput.value;
    


        const taskItem = document.createElement("li");
        taskItem.innerText = taskText;

        if (taskText.trim() !== "")
   
        taskList.appendChild(taskItem);

        taskInput.value = "";
    

        

 }


const addButton = document.getElementById("addButton");
addButton.addEventListener("click", adicionarTarefa);