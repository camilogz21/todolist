// Seleccionamos los elementos HTML
const inputTarea = document.getElementById('nueva-tarea');
const listaTareas = document.getElementById('lista-tareas');

// Función para agregar una nueva tarea
function agregarTarea() {
    const textoTarea = inputTarea.value.trim();

    if (textoTarea === '') {
        alert('Escribe una tarea antes de agregarla.');
        return;
    }

    // Crear el nuevo elemento de lista (li)
    const nuevaTarea = document.createElement('li');

    // Agregar el texto de la tarea
    nuevaTarea.textContent = textoTarea;

    // Crear botón de eliminar
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.onclick = () => eliminarTarea(nuevaTarea);

    // Agregar el botón a la nueva tarea
    nuevaTarea.appendChild(botonEliminar);

    // Escuchar el clic en la tarea para marcarla como completada
    nuevaTarea.addEventListener('click', () => nuevaTarea.classList.toggle('completed'));

    // Agregar la nueva tarea a la lista
    listaTareas.appendChild(nuevaTarea);

    // Limpiar el campo de entrada
    inputTarea.value = '';
}

// Función para eliminar una tarea
function eliminarTarea(tarea) {
    listaTareas.removeChild(tarea);
}
