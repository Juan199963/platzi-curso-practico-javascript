console.group("Cuadrados");






function perimetrocuadrado(lado){
    return lado * 4;
}

//console.log('El perimetro del cuadrado es: ' + perimetrocuadrado)

function areacuadrado(lado){
    return lado ** 2;
}

// console.log('El perimetro del cuadrado es: ' + areacuadrado)

console.groupEnd



console.group("Triangulos");



// console.log("Los lados del triangulo miden: " + ladotriangulo1 +","+ladotriangulo2 +"y "+ basetriangulo1 );

function perimetrotriangulo(ladotriangulo1,ladotriangulo2,base){
    return ladotriangulo1 + ladotriangulo2 + base

}

// console.log('El perimetro del triangulo es: ' + perimetrotriangulo)

// const areatriangulo = (basetriangulo1*alturatriangulo1)/2

function areatriangulo(base, altura){
    return(base * altura) / 2
}

//console.log('La altura del triangulo es: ' + alturatriangulo1)

console.groupEnd



console.group("Circulos");
//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es " + radioCirculo + " cms.");
//Diametro

function diametroCirculo(radio){
    return radio * 2;

}

// PI
const PI = Math.PI;
//console.log("PI es " + PI + ".");
// Perimetro
const perimetroCirculo = diametroCirculo * PI;
//console.log("El perimetro del circulo es " + perimetroCirculo + " cms.");
function circunferencia(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;

}


//Area

// console.log("El area del circulo es " + areaCirculo + " cms.");
console.groupEnd();

function areaCirculo(radio){
    return (radio**2)*PI
}

function calcularperimetrocuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetrocuadrado(value);
    alert(perimetro);
}


function calcularareacuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areacuadrado(value);
    alert(area);
}