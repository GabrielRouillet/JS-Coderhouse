const cupones = [
    new Cupon("CUPON10", 0.10),
    new Cupon("CUPON15", 0.15),
    new Cupon("CUPON20", 0.20)
]

const productos = [
    new Producto(1,"Coca Cola",2300),
    new Producto(2,"Fanta",2100),
    new Producto(3,"Sprite",2500),
    new Producto(4,"Monster",3000),
    new Producto(5,"Manaos",1200)
]

const carrito = new Carrito([], null);

const cliente = new Cliente(
    prompt("Ingrese su nombre y apellido:"),
    prompt("Ingrese su edad:"),
    prompt("Ingrese su domicilio completo:"),
    prompt("ingrese su DNI:")
);

let seguirComprando = confirm("Desea realizar una compra?")
while (seguirComprando) {
    const nombreProducto = prompt("Ingrese el nombre del producto que desea comprar: ");
    const productoSeleccionado = productos.find((producto) => producto.nombre.toLowerCase() === nombreProducto.toLowerCase());
    if(productoSeleccionado) {
        const cantidadProducto = prompt("Ingrese la cantidad:");
        carrito.items.push(new ItemComprado(productoSeleccionado, cantidadProducto));
    } else {
        alert("El producto ingresado no existe")
    }
    
    seguirComprando = confirm("Desea comprar otro producto?")
}
const poseeCupon = confirm ("Posee un cupon de descuento?");
if (poseeCupon) {
    const nombreCupon = prompt("Ingrese el cupon:");
    const cuponSeleccionado = cupones.find((cupon) => cupon.codigo.toUpperCase() === nombreCupon.toUpperCase());
    if(cuponSeleccionado){
        carrito.cupon = cuponSeleccionado
    }
    else{
        alert("No existe el cupon");
        
    }
}
let listaDeProductosComprados = '';
carrito.items.forEach(item => listaDeProductosComprados += item.producto.nombre + ' x ' + item.cantidad + '\n')

alert("Estimado cliente "+ cliente.nombre + ", realizo la compra de: \n"+ listaDeProductosComprados);
alert("El total a pagar es: " + carrito.obtenerTotalBruto())
if (carrito.cupon){
    alert("Con el cupon de descuento debe pagar el valor de: " + carrito.obtenerTotalNeto());
}
alert("Lo enviaremos a su domicilio: " + cliente.domicilio);
alert("¡Gracias por su compra!");