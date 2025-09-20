const template = document.getElementById("card-template");
const contenedor = document.getElementById("contenedor");

const productos = [
    { titulo: "Laptop", desc: "16GB RAM", precio: "$1200", imagen: "https://p2-ofp.static.pub//fes/cms/2024/07/17/109vq5fdalv01w5jsu6vh35ncnk5jn890135.png" },
    { titulo: "Mouse", desc: "Inalámbrico", precio: "$25", imagen: "https://static.vecteezy.com/system/resources/thumbnails/043/592/291/small_2x/computer-mouse-on-isolated-transparent-background-png.png" },
    { titulo: "Monitor", desc: "4K UHD", precio: "$800", imagen: "https://fanaticosdelhardware.com/wp-content/uploads/2018/06/C24G1_FRONT.png" },
    { titulo: "Teclado", desc: "Mecánico", precio: "$100", imagen: "https://static.vecteezy.com/system/resources/thumbnails/011/665/175/small/slim-thai-and-english-keyboard-isolated-on-white-background-png.png" },
    { titulo: "Smartphone", desc: "128GB", precio: "$600", imagen: "https://images.vexels.com/media/users/3/208104/isolated/preview/0ec1c3524475f9562903f47771d2736b-ilustracion-de-dispositivo-de-telefono-celular.png" }
];

productos.forEach(producto => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = producto.titulo;
    clon.querySelector(".desc").textContent = producto.desc;
    clon.querySelector(".precio").textContent = producto.precio;
    clon.querySelector(".imagen").src = producto.imagen;

    contenedor.appendChild(clon);
});