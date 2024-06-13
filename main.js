let cupon1 = "cupon10"
let cupon2 = "cupon15"
let cupon3 = "cupon20"
let formaPago1 = " "
let cantidadCompras = 0
let totalPagarFinal=0.0
let nombre = prompt ("Ingrese su nombre:")
let apellido = prompt ("Ingrese su apellido:")
let c = prompt ("Desea realizar una compra? Responda si o no")
function descuento10(){
    totalPagar = parseFloat(total-(total * 0.1))
}
function descuento15(){
    totalPagar = parseFloat(total-(total * 0.15))
}
function descuento20(){
    totalPagar = parseFloat(total-(total * 0.2))
}
function nombreCompleto(n,a) {
    alert("Estimadisimo cliente: " +nombre+" "+apellido)}
    nombreCompleto();
for (let i = 1; c=="si"; i++) {
let cantidadProducto = prompt ("¿Cuantos productos desea comprar? Tener en cuenta que maximo pueden ser 3");
if(cantidadProducto==1){
let producto1 = parseFloat(prompt ("Ingrese el valor del producto: "))
total = parseFloat(producto1)
}else if(cantidadProducto==2){
let producto1=parseFloat(prompt ("Ingrese el valor del primer producto: "))
let producto2=parseFloat(prompt ("Ingrese el valor del segundo producto: "))
total = parseFloat(producto1+producto2)
}else if(cantidadProducto==3) {
    let producto1 = parseFloat(prompt ("Ingrese el valor del primer producto: "))
    let producto2 = parseFloat(prompt ("Ingrese el valor del segundo producto: "))
    let producto3 = parseFloat(prompt ("Ingrese el valor del tercer producto: "))
total = parseFloat(producto1+producto2+producto3)
}else{
    alert ("No vas a comprar nada")}
alert("su total acumulado es: $" + total)
let descuento = prompt("Ingrese su cupon de descuento: ")
if(descuento == cupon1){
    descuento10();
alert ("El descuento aplicado es del %10 , debe pagar: $" + totalPagar)
}else if (descuento == cupon2){
    descuento15();
    alert ("El descuento aplicado es del %15 , debe pagar: $" + totalPagar)
}else if(descuento == cupon3){
    descuento20();
    alert ("El descuento aplicado es del %20 , debe pagar: $"+totalPagar)
}else {
    totalPagar= total
    alert("No ingreso ningun cupon por lo tanto no tendra descuento, debe pagar: $"+ totalPagar)
}
totalPagarFinal = totalPagar+totalPagarFinal
cantidadCompras = cantidadCompras + 1
c = prompt ("Desea realizar otra compra? Responda si o no")
}
let formaPago = prompt("ingrese un numero según el metodo de pago deseado: 1-Efectivo, 2-Transferencia Bancaria, 3-Tarjeta de Credito")
switch (formaPago) {
    case "1":
nombreCompleto();
formaPagoFinal = "Efectivo"
alert("Pagará el importe $"+totalPagarFinal+" con el metodo de pago "+formaPagoFinal);
    break;

    case "2":
formaPagoFinal="Transferencia Bancaria";
nombreCompleto();
alert("Pagará el importe $" + totalPagarFinal+ " con el metodo de pago " + formaPagoFinal);
        break;

    case "3":
formaPagoFinal="Tarjeta de Credito";
nombreCompleto();
alert("Pagará el importe $" + totalPagarFinal+ " con el metodo de pago " + formaPagoFinal);
    break;

    default:
        alert("No eligio un metodo de pago")
        break;
}
alert("Hoy realizo la cantidad de " +cantidadCompras+" compras, ¡Gracias!")