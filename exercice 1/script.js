document.addEventListener("DOMContentLoaded", function() {
    let newTaskInput = document.getElementById("new-task");
    let addTaskButton = document.getElementById("add-task");
    let taskList = document.getElementById("task-list");

    // Charger les tâches depuis le localStorage au démarrage
    let tasks;
    if (localStorage.getItem("tasks")) {
        tasks = localStorage.getItem("tasks").split(',');
    } else {
        tasks = [];
    };

    // Charger les tâches existantes au démarrage
    tasks.forEach(task => {
        addTask(task);
    });

    // Fonction pour ajouter une tâche à la liste
    function addTask(taskName) {
        let taskItem = document.createElement("li");
        taskItem.innerText = taskName;

        taskItem.addEventListener("click", function() {
            taskItem.classList.toggle("completed");
            saveTasks();
        });

        let supButton = document.createElement("button");
        supButton.innerText = "Supprimer";
        supButton.addEventListener("click", function() {
            taskItem.remove();
            saveTasks();
        });

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    }

    // Ajouter une nouvelle tâche à la liste
    addTaskButton.addEventListener("click", function() {
        const taskName = newTaskInput.value.trim();
        if (taskName !== "") {
            addTask(taskName);
            newTaskInput.value = "";
            saveTasks();
        }
    });

    // Sauvegarder les tâches dans le localStorage
    function saveTasks() {
        let tasks = Array.from(taskList.children).map(task => task.innerText);
        localStorage.setItem("tasks", tasks.join(','));
    }
});