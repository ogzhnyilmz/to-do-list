
function toDoList() {
    let work = prompt("Yapmak istediğiniz iş nedir?");
    let date = prompt("Hangi tarihte yapmak istiyorsunuz?");

    if (work && date) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push({ work, date });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    if (tasks.length > 0) {
        let msg = tasks.map(task => `İş: ${task.work} Tarih: ${task.date}`).join("\n");
        alert(msg);
    }

}

toDoList();