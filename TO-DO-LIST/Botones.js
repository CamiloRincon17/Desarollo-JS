const form = document.getElementById("form-tarea");
const input = document.getElementById("tarea");
const lista = document.getElementById("lista-tareas");
const contador = document.getElementById("contador");

let totalTasks = 0;

form.addEventListener("submit", function(e) {
  e.preventDefault(); // evita que se recargue la página
  const tareaTexto = input.value.trim();

  if (tareaTexto !== "") {
    agregarTarea(tareaTexto);
    input.value = "";
  }
});

function agregarTarea(text) {
  const li = document.createElement("li");
  li.textContent = text;

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";

  btnEliminar.addEventListener("click", function() {
    lista.removeChild(li);
    totalTasks--;
    updateContador();
  });

  li.appendChild(btnEliminar);
  lista.appendChild(li);

  totalTasks++;
  updateContador();
}

function updateContador() {
  contador.textContent = totalTasks;
}
