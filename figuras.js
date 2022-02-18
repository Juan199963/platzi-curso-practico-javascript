console.group("Cuadrados");


const ladocuadrado = 5;

console.log("Los lados del cuadrado miden: " + ladocuadrado);

const perimetrocuadrado = ladocuadrado*4

console.log('El perimetro del cuadrado es: ' + perimetrocuadrado)

const areacuadrado = ladocuadrado*ladocuadrado

console.log('El perimetro del cuadrado es: ' + areacuadrado)

console.groupEnd


console.group("Triangulos");


const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const basetriangulo1 = 4;
const alturatriangulo1 = 5.5;


console.log("Los lados del triangulo miden: " + ladotriangulo1 +","+ladotriangulo2 +"y "+ basetriangulo1 );

const perimetrotriangulo = ladotriangulo1+ladotriangulo2+basetriangulo1

console.log('El perimetro del triangulo es: ' + perimetrotriangulo)

const areatriangulo = (basetriangulo1*alturatriangulo1)/2

console.log('La altura del triangulo es: ' + alturatriangulo1)

console.groupEnd



console.group("Circulos");
//Radio
const radioCirculo = 4;
console.log("El radio del circulo es " + radioCirculo + " cms.");
//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es " + diametroCirculo + " cms.");
// PI
const PI = Math.PI;
console.log("PI es " + PI + ".");
// Perimetro
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es " + perimetroCirculo + " cms.");
//Area
const areaCirculo = PI * (radioCirculo**2);
console.log("El area del circulo es " + areaCirculo + " cms.");
console.groupEnd();