const productos = [
    new Producto(1,"Coca Cola",2300),
    new Producto(2,"Fanta",2100),
    new Producto(3,"Sprite",2500),
    new Producto(4,"Monster",3000),
    new Producto(5,"Manaos",1200)
]
let botonDatos = false;

    document.getElementById('form-cliente').addEventListener('submit', function(event) {
        event.preventDefault();
    botonDatos = true; 
    const nombreApellido = document.getElementById('nombreApellido').value;
    let edad = document.getElementById('edad').value;
    let domicilio = document.getElementById('domicilio').value;
    let dni = document.getElementById('dni').value;
    return cliente = new Cliente (
        nombreApellido,
        edad,
        domicilio,
        dni,
    )
    })
function generarCarrito() {
    let carrito = localStorage.getItem('carrito')
    if(!carrito) {
        return;
    }

    carrito = JSON.parse(carrito);

    const carritoDOM = document.getElementById('carrito')
    carritoDOM.innerHTML = ''

    carrito.items.forEach(item => {
        const itemCarrito = document.createElement('li')
        itemCarrito.className = "list-group-item d-flex justify-content-between align-items-start"

        itemCarrito.innerHTML = `
            <div class="ms-2 me-auto">
            <div class="fw-bold">${item.producto.nombre}</div>
            \$${item.producto.precio}
            </div>
            <span class="badge text-bg-primary rounded-pill">${item.cantidad}</span>
        `

        carritoDOM.appendChild(itemCarrito);
    })
}

document.getElementById('form-carrito').addEventListener('submit', function(event) {
    event.preventDefault();
    const producto = productos.find(p => p.id === parseInt(document.getElementById('carrito-producto').value))
    const cantidad = document.getElementById('carrito-cantidad').value;
    const itemAgregado = new ItemComprado(producto, cantidad);
    const carrito =  localStorage.getItem('carrito') ?
        JSON.parse(localStorage.getItem('carrito')) :
        new Carrito([], null)
    
    carrito.items.push(itemAgregado);
    localStorage.setItem('carrito', JSON.stringify(carrito))

    generarCarrito()
});

function comprar() {
    if(!botonDatos) {
        alert('Recordar llenar los datos personales primero')
        return;
    }
    const carrito = JSON.parse(localStorage.getItem('carrito'))
    const historial = localStorage.getItem('historial-compras') ? JSON.parse(localStorage.getItem('historial-compras')) : []

    carrito.items.forEach(itemComprado => historial.push(itemComprado));
    localStorage.setItem('historial-compras', JSON.stringify(historial))
    localStorage.removeItem('carrito')
    document.getElementById('carrito').innerHTML = ''
    let listaDeProductosComprados = '';
carrito.items.forEach(item => listaDeProductosComprados += item.producto.nombre + ' x ' + item.cantidad + " X " + item.producto.precio + '\n')
console.log(listaDeProductosComprados)
let totalPagar = 0;
carrito.items.forEach(item => totalPagar += item.cantidad * item.producto.precio)
console.log(totalPagar)
const pagarDOM = document.getElementById('pagar')
    pagarDOM.innerHTML = "<p>Estimad@ "+ cliente.nombre+ "</p>"+ "<p>Lo enviaremos a su domicilio: "+ cliente.domicilio+"</p>" +"<p>y debe pagar un total de:"+ " $" + totalPagar+ "</p>"
}

generarCarrito()