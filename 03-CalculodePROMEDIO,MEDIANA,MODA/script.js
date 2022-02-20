const lista1 = [
    100,
    200,
    300,
    500,
    600,
];

let sumLista = 0;




function calculoPromedio(lista){
    // let sumLista1 = 0;
    // for (let i = 0; i < lista.length; i ++){
    //     sumLista1 = sumLista1 + lista[i]
    // }
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento; 
        }
    );

    let promedioLista = sumaLista/lista.length;

    return promedioLista;
}

const mitadLista1 = parseInt(lista1.length/2);


function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)){
    const element1 = lista1[mitadLista1 -1];
    const element2 = lista1[mitadLista1];

    mediana = calculoPromedio([element1, element2]);



}else{
    mediana = lista1[mitadLista1];
}