const productos = [
    new Producto(1,"Fernet Branca",9000,"./img/fernet.png"),
    new Producto(2,"Fernet Buhero",7500,"./img/buhero.png"),
    new Producto(3,"Vodka Smirnoff",6000,"./img/smirnoff.png"),
    new Producto(4,"Vodka Absolut",18000,"./img/absolut.png"),
    new Producto(5,"Cerveza Quilmes",2000,"./img/quilmes.png"),
    new Producto(6,"Cerveza Brahma",2100,"./img/brahma.png"),
    new Producto(7,"Cerveza Stella Artois",2600,"./img/stella.png"),
    new Producto(8,"Gancia",3200,"./img/gancia.png"),
    new Producto(9,"Malibu",15000,"./img/malibu.png"),
    new Producto(10,"Jaggermeister",19000,"./img/jagger.png"),
    new Producto(11,"Campari",6000,"./img/campari.png"),
    new Producto(12,"Jack Daniels Honey",45000,"./img/jack.png"),
    new Producto(13,"Red Label",30000,"./img/redlabel.png"),
    new Producto(14,"Johnnie Walker (blue label)",120000,"./img/bluelabel.png"),
    new Producto(15,"Federio de Alvear",5800,"./img/fede.png"),
    new Producto(16,"London",9000,"./img/london.png"),
    new Producto(17,"Santa Filomena",3100,"./img/filomena.png"),
    new Producto(18,"Cosecha Tardia",5800,"./img/cosecha.png"),
    new Producto(19,"Termidor",1600,"./img/temineitor.png"),
    new Producto(20,"Sidra 1888",5000,"./img/sidra.png"),
    new Producto(21,"Coca Cola",2800,"./img/coca.png"),
    new Producto(22,"Sprite",2800,"./img/sprite.png"),
    new Producto(23,"Manaos Pomelo",1400,"./img/pomelo.png"),
    new Producto(24,"Speed",1100,"./img/speed.png"),
]


const renderProductos = (productos) => {
    let contenidoHTML = "";
    productos.forEach(producto => {
        contenidoHTML += `
        
        <div class="col-md-3">
        <form>
        <div class="card border-0">
        <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
            <p class="card-text text-primary "><b>$ ${producto.precio}</b><br><span class="card-text text-secondary">${producto.nombre}</span></p>
        <input id="carrito-cantidad-${producto.id}" name="carrito-cantidad" class="form-control form-control-md col d-inline p-2" type="number" placeholder="Seleccione Cantidad" aria-label=".form-control-lg example">
            </div>
        <button onclick="agregarAlcarrito(${producto.id})" type="submit" class="btn btn-dark rounded-pill">Agregar Producto</button>
        </div>
        </form>
        </div>`;
    })
    document.getElementById("resultado").innerHTML = contenidoHTML;
}

renderProductos(productos);


function agregarAlcarrito(id) {
    const producto = productos.find(item => item.id == id);
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    console.log(typeof (document.getElementById(`carrito-cantidad-${id}`).value) )
    if (parseInt(document.getElementById(`carrito-cantidad-${id}`).value) <= 0){
        alert("error")
        return
    }
    const cantidad = parseInt(document.getElementById(`carrito-cantidad-${id}`).value);
    const itemAgregado = new ItemComprado(producto, cantidad);
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    totalProductos();
    console.log ("se agrego al carrito")
    Swal.fire({
        icon: "success",
        title: "Agregado al Carrito",
        showConfirmButton: false,
        timer: 1000
      });
      renderCarrito();
      console.log(itemAgregado)
      console.log(cantidad)
      console
      event.preventDefault()
      return itemAgregado
}

function totalProductos(){
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    document.getElementById("totalCarrito").innerHTML = carrito.length;
}
totalProductos();


function renderCarrito(){
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let contenidoHTML = `<table class="table">
    <tbody id="tabla_carrito">`;   
    for (const producto of carrito){
        contenidoHTML += `<tr>
        <td><img src="${producto.img}" class="card-img-top" alt="${producto.nombre}" width="16"></td>
        <td>${producto.nombre}</td>
        <td>$${producto.precio}</td>
        <td><button class="btn btn-danger">X</button></td>
        </tr> `;    
    }

    contenidoHTML += `</tbody>
    </table>`;

    document.getElementById("contenido").innerHTML = contenidoHTML;

}


renderCarrito()

function eliminarProducto() {
    
    
}
