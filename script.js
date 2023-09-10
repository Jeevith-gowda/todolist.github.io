document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                ${taskText}
                <span class="delete">Delete</span>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
        }
    });
});
