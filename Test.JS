document.getElementById("cargar").addEventListener("click", async () => {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const datos = await respuesta.json();

    const lista = document.getElementById("lista");
    
    lista.innerHTML = "";
    datos.forEach(usuario => {
      const li = document.createElement("li");
      li.textContent = usuario.name +"  "+usuario.email;
      lista.appendChild(li);
    });
     const btn = document.getElementById("btn");
  const mensaje = document.getElementById("mensaje");
  const btnEliminar= document.getElementById("btnEliminar")
  const btnVerde= document.getElementById("btnVerde")

  btn.addEventListener("click", () => {
    mensaje.textContent = "¡Botón presionado!";
  });
   btnEliminar.addEventListener("click",()=>{
    mensaje.textContent="";
   })
    btnverde.addEventListener("click",() =>{
    mensaje.style.color= "purple"
})
  });  
 