const lista1 = [
    100,
    200,
    3,
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



function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}

let mediana;

function comparenumbers(a,b){
    return a- b
};


function calculoMediana(lista_mediana){

    
    const ordenada = lista_mediana.sort((a,b)=>{return a-b});

    if (esPar(ordenada.length)){
        const element1 = ordenada[parseInt(lista.length/2)-1];
        const element2 = ordenada[parseInt(lista.length/2)];

        mediana = calculoPromedio([element1, element2]);

        return mediana;

    }else{
        mediana = ordenada[parseInt(ordenada.length/2)];
        return mediana;
    }
}


const lista_modita = [
    1,1,1,2,2,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,
];


function calculoModa(lista_moda){

    const listaAñadida = {};


    lista_moda.map(
        function (elemento){
            if(listaAñadida[elemento]){
                listaAñadida[elemento] += 1;
            } else {
                listaAñadida[elemento] = 1;

            }


            
        }
    
    );
            
    // console.log(listaAñadida)
    const lista1Array = Object.entries(listaAñadida).sort(
        function (a,b){
            return a[1]-b[1];
        });

    const moda = lista1Array[lista1Array.length - 1]

    return moda;


};