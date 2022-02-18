const precioOriginal = 120;
const descuento = 18;




function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;


    return precioConDescuento;
}

function ButtonPriceDiscount(){
    const inputprice = document.getElementById("InputPrice");
    const priceValue = inputprice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);
    const resultP = document.getElementById("ResultP");

    resultP.innerText = "El precio con descuento son: $" + precioConDescuento
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// })