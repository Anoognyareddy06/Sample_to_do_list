var tasks = [];

function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    tasks.push(taskText);
    input.value = "";
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    var list = document.getElementById("taskList");
    list.innerHTML = "";

    for (var i = 0; i < tasks.length; i++) {
        var li = document.createElement("li");

        var span = document.createElement("span");
        span.innerText = tasks[i];

        var delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.className = "delete-btn";
        delBtn.setAttribute("onclick", "deleteTask(" + i + ")");

        li.appendChild(span);
        li.appendChild(delBtn);
        list.appendChild(li);
    }
}
