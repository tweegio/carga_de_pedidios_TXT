(function checkDateInput() {
    const input = document.createElement("input");
    input.setAttribute("type", "date");

    if (input.type !== "date") {
        document.getElementById("fecha").classList.add("no-support");
        document.getElementById("fecha").setAttribute("placeholder", "Seleccione la fecha (AAAA-MM-DD)");
    }
})();

let productos = [];

function agregarProducto() {
    const cantidad = document.querySelector('input[name="cantidad"]').value;
    const medida = document.querySelector('select[name="medida"]').value;
    const color = document.querySelector('select[name="color"]').value;
    const cliente = document.querySelector('input[name="cliente"]').value;
    const fecha = document.querySelector('input[name="date"]').value;
    const orden = document.querySelector('input[name="orden"]').value;

    
    if (cantidad && medida && color && cliente && fecha && orden) {
        productos.push({ fecha, orden, cantidad, medida, color });
        actualizarResumen();
  

    } else {
        alert("Por favor, completa todos los campos del producto.");
    }
}


function actualizarResumen() {
    let resumen = "";
    productos.forEach((producto, index) => {
        resumen += `_Producto ${index + 1}/: Entrega: ${producto.fecha} / Op: ${producto.orden}  / Cant: ${producto.cantidad} / medida:${producto.medida} / Color: ${producto.color}\n`;
    });
    document.getElementById("resumenPedido").value = resumen;
}

function borrarPedido() {
    productos = [];
    document.getElementById("cliente").value = "";
    document.getElementById("comentarios").value = "";
    document.getElementById("resumenPedido").value = "";
    document.querySelector('input[name="cantidad"]').value = "";
    document.querySelector('input[name="orden"]').value = "";

    alert("Acabas de borrar el pedido. Debes empezar de cero.");
}
