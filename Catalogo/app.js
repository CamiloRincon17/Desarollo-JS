// Función para cargar un archivo HTML dentro de un contenedor por ID
async function cargarFragmento(id, archivo) {
  const respuesta = await fetch(archivo);    // llamamos al archivo con fetch
  const contenido = await respuesta.text();  // lo convertimos a texto
  document.getElementById(id).innerHTML = contenido; // lo insertamos en el div
}

// Llamadas:
cargarFragmento("header", "header.html");  // carga el header
cargarFragmento("footer", "footer.html");  // carga el footer
