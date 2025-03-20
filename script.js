// Selecciona todos los interruptores dentro del contenedor de tareas
document.querySelectorAll(".task-container .switch input[type='checkbox']").forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
        // Identifica la tarea asociada
        const taskElement = event.target.closest(".task");
        const statusText = taskElement.querySelector(".status"); // Selecciona el texto de estado

        // Cambia dinámicamente el estado ("Sí" o "No")
        if (event.target.checked) {
            statusText.textContent = "Si"; // Estado activado
        } else {
            statusText.textContent = "No"; // Estado desactivado
        }
    });
});
