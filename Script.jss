const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("careTasks")) || [];

taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("taskName").value;
    const date = document.getElementById("taskDate").value;
    const time = document.getElementById("taskTime").value;

    const task = { name, date, time };

    tasks.push(task);
    localStorage.setItem("careTasks", JSON.stringify(tasks));

    displayTasks();
    taskForm.reset();
});

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${task.name}</strong><br>
            ${task.date} at ${task.time}
            <span class="delete" onclick="deleteTask(${index})">❌</span>
        `;
        taskList.appendChild(li);

        scheduleReminder(task);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("careTasks", JSON.stringify(tasks));
    displayTasks();
}

function scheduleReminder(task) {
    const taskTime = new Date(`${task.date}T${task.time}`).getTime();
    const currentTime = new Date().getTime();
    const delay = taskTime - currentTime;

    if (delay > 0) {
        setTimeout(() => {
            alert(`Reminder: ${task.name}`);
        }, delay);
    }
}

displayTasks();
