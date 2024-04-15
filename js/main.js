
let producto;

function productoElegido(producto) {
    alert("Usted eligio: " + producto)
    elegirOtro(producto);
}

function elegirOtro (producto) {
let elegirOtroProducto = confirm("Desea elegir otro producto?")
    if (elegirOtroProducto) {
        elegirProductos (producto);
    } else {
        alert("Gracias por su visita!");
    }
}

function elegirProductos(producto) {
    do {
        alert("Bienvenidos a CotiFest! \n\nIngrese el producto deseado:\n\n 1. Globos\n 2. Caramelos\n 3. Bizcochuelo \n 4. Velas \n 5. Adorno \n 6. Bengala")
        let numero = parseInt(prompt("Ingrese el numero de la opcion elegida"));

        switch (numero) {
            case 1:
                producto = "Globos";
                productoElegido(producto);
                break;
            case 2:
                producto = "Caramelos";
                productoElegido(producto);
                break;
            case 3:
                producto = "Bizcochuelos";
                productoElegido(producto);
                break;
            case 4:
                producto = "Velas";
                productoElegido(producto);
                break;
            case 5:
                producto = "Adornos";
                productoElegido(producto);
                break;
            case 6:
                producto = "Bengalas";
                productoElegido(producto);
                break;
            default:
                alert("La opcion ingresada no es valida, por favor intentelo nuevamente")
                break;
        }
    } while (isNaN(numero) || numero < 1 || numero > 6);
};

elegirProductos (producto);