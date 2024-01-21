function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var newTask = document.createElement("li");
    newTask.textContent = taskInput.value;

    // Add a click event to remove the task when clicked
    newTask.addEventListener("click", function() {
        this.remove();
    });

    taskList.appendChild(newTask);

    // Clear the input field after adding the task
    taskInput.value = "whatever";
}
