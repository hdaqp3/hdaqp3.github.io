// Selecciona todos los interruptores dentro del contenedor de tareas
document.querySelectorAll(".task-container .switch input[type='checkbox']").forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
        // Identifica la tarea asociada
        const taskElement = event.target.closest(".task");
        const switchSpan = taskElement.querySelector("label.switch > span");

        // Cambia dinámicamente el color del interruptor según el estado
        if (event.target.checked) {
            switchSpan.style.backgroundColor = "#4ed164"; // Estado activado
            console.log(`Tarea completada: ${taskElement.querySelector("p").textContent}`);
        } else {
            switchSpan.style.backgroundColor = "#ccc"; // Estado desactivado
            console.log(`Tarea pendiente: ${taskElement.querySelector("p").textContent}`);
        }
    });
});

// Responsive fix: Ajuste adicional para pantallas más pequeñas
window.addEventListener("resize", () => {
    const container = document.querySelector(".task-container");

    // Ajuste de padding según el tamaño de la pantalla
    if (window.innerWidth < 480) {
        container.style.padding = "8px";
    } else {
        container.style.padding = "15px";
    }
});
