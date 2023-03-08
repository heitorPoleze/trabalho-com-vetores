/*   Avaliação 6 - Trabalho em Grupo 2022.

Seu grupo está recebendo um arquivo JavaScript com a declaração de 3 vetores, cada um deles preenchido com os seguintes elementos:

* vetAnimal: o identificador de cada animal;
* vetTipoRebanho: a classificação de cada animal do vetor "vetAnimal". Existindo três classificações possíveis: SUINO, CAPRINO e OVINO;
* vetPeso: o peso de cada animal em Kg.

Seguindo esta lógica podemos entender que o "Animal 1" é um "SUINO" de 54 kg. Assim como o "Animal 2" é um "CAPRINO" de 79 kg... e assim por diante.

A missão do seu grupo é desenvolver uma aplicação que seja capaz de realizar 4 (quatro) funcionalidades:

**OBS: Os valores mostrados nos exemplos a seguir são apenas ilustrativos e não representam os valores reais calculados a partir dos dados dos vetores.

1ª Funcionalidade - Disponibilizar um botão que, ao ser acionado, exiba na sua parte final, como saída, uma lista com todos os animais: o identificador, tipo e peso. Por exemplo:
    Animal 1    -    SUINO    -    54 kg
    Animal 2    -    CAPRINO  -    79 kg
    Animal 3    -    SUINO    -    5 kg
    ...
    Animal 100  -    OVINO    -    42 kg

2ª Funcionalidade - Disponibilizar um botão que, ao ser acionado, apague outras saídas do documento Html e mostre uma nova lista, agora contendo todos os ANIMAIS agrupados por tipo. Por exemplo:
    SUINOS:                                                         
    Animal 1 - 54 kg                                          
    Animal 3 - 5 kg
    ...

    CAPRINOS:
    Animal 2 - 79 kg 
    Animal 4 - 56 kg   
    ...

    OVINOS:
    Animal 19 - 50 kg
    ... 

3ª Funcionalidade - Disponibilizar um botão que, ao ser acionado, apague outras saídas do documento Html, calcule e mostre a soma e a média dos pesos dos animais de cada tipo. Por exemplo:
    SUINOS:
    Soma dos Pesos = 1199 Kg
    Média dos Pesos = 34.27 Kg/Animal

    CAPRINOS:
    Soma dos Pesos = 2026 Kg
    Média dos Pesos = 61.36 Kg/Animal

    OVINOS:
    Soma dos Pesos = 1749 kg
    Média dos Pesos = 52.67 kg/Animal

4ª Funcionalidade - Disponibilizar um botão que, ao ser acionado, apague outras saídas do documento Html, mostre uma nova lista que contenha os animais com peso superior ao informado pelo usuário (deve haver um campo de input para o usuário informar o peso).
                    Por exemplo, se o usuário informar o peso 50 Kg, deve ser mostrada a seguinte lista:
    Animal 1    -    SUINO    -    54 kg
    Animal 2    -    CAPRINO  -    79 kg
    Animal 4    -    CAPRINO  -    56 kg
    ...

*/

var inTipoAnimal = document.getElementById('inTipoAnimal');
var btListar = document.getElementById('btListar');
var btMedia = document.getElementById('btMedia');
var inPeso = document.getElementById('inPeso');
var outMsg = document.getElementById('outMsg');
var btFiltrar = document.getElementById('btFiltrar');

var vetAnimal = ["Animal 1", "Animal 2", "Animal 3", "Animal 4", "Animal 5", "Animal 6", "Animal 7", "Animal 8", "Animal 9", "Animal 10", "Animal 11", "Animal 12", "Animal 13", "Animal 14", "Animal 15", "Animal 16", "Animal 17", "Animal 18", "Animal 19", "Animal 20", "Animal 21", "Animal 22", "Animal 23", "Animal 24", "Animal 25", "Animal 26", "Animal 27", "Animal 28", "Animal 29", "Animal 30", "Animal 31", "Animal 32", "Animal 33", "Animal 34", "Animal 35", "Animal 36", "Animal 37", "Animal 38", "Animal 39", "Animal 40", "Animal 41", "Animal 42", "Animal 43", "Animal 44", "Animal 45", "Animal 46", "Animal 47", "Animal 48", "Animal 49", "Animal 50", "Animal 51", "Animal 52", "Animal 53", "Animal 54", "Animal 55", "Animal 56", "Animal 57", "Animal 58", "Animal 59", "Animal 60", "Animal 61", "Animal 62", "Animal 63", "Animal 64", "Animal 65", "Animal 66", "Animal 67", "Animal 68", "Animal 69", "Animal 70", "Animal 71", "Animal 72", "Animal 73", "Animal 74", "Animal 75", "Animal 76", "Animal 77", "Animal 78", "Animal 79", "Animal 80", "Animal 81", "Animal 82", "Animal 83", "Animal 84", "Animal 85", "Animal 86", "Animal 87", "Animal 88", "Animal 89", "Animal 90", "Animal 91", "Animal 92", "Animal 93", "Animal 94", "Animal 95", "Animal 96", "Animal 97", "Animal 98", "Animal 99", "Animal 100"];
var vetTipoRebanho = ["SUINO", "CAPRINO", "SUINO", "CAPRINO", "SUINO", "SUINO", "CAPRINO", "SUINO", "SUINO", "CAPRINO", "SUINO", "SUINO", "CAPRINO", "SUINO", "CAPRINO", "SUINO", "CAPRINO", "CAPRINO", "OVINO", "OVINO", "SUINO", "OVINO", "OVINO", "CAPRINO", "OVINO", "OVINO", "CAPRINO", "CAPRINO", "OVINO", "CAPRINO", "SUINO", "SUINO", "SUINO", "SUINO", "SUINO", "CAPRINO", "CAPRINO", "CAPRINO", "OVINO", "SUINO", "OVINO", "CAPRINO", "SUINO", "CAPRINO", "SUINO", "SUINO", "CAPRINO", "SUINO", "OVINO", "SUINO", "OVINO", "CAPRINO", "CAPRINO", "SUINO", "OVINO", "OVINO", "CAPRINO", "OVINO", "OVINO", "SUINO", "CAPRINO", "OVINO", "CAPRINO", "CAPRINO", "SUINO", "SUINO", "SUINO", "SUINO", "OVINO", "SUINO", "OVINO", "SUINO", "SUINO", "OVINO", "CAPRINO", "SUINO", "SUINO", "SUINO", "OVINO", "OVINO", "CAPRINO", "CAPRINO", "OVINO", "CAPRINO", "CAPRINO", "CAPRINO", "CAPRINO", "SUINO", "OVINO", "OVINO", "CAPRINO", "OVINO", "SUINO", "OVINO", "OVINO", "OVINO", "SUINO", "OVINO", "CAPRINO", "OVINO"];
var vetPeso = [54, 79, 5, 56, 1, 12, 52, 48, 22, 21, 49, 29, 68, 48, 13, 51, 87, 49, 50, 8, 62, 3, 13, 95, 39, 70, 57, 1, 52, 21, 28, 100, 17, 85, 49, 94, 100, 82, 6, 57, 80, 24, 28, 73, 9, 93, 73, 3, 69, 16, 91, 22, 12, 18, 59, 58, 45, 71, 27, 55, 5, 83, 13, 9, 95, 55, 29, 83, 45, 37, 62, 69, 8, 85, 46, 32, 77, 63, 75, 26, 50, 26, 40, 2, 3, 43, 15, 39, 8, 20, 50, 54, 69, 20, 87, 63, 82, 96, 44, 42];


function listarTipo(animal) {
    var strListarAnimal = "Animal:\t\tTipo Animal:\t\tPeso:(Kg)\n\n";
    for (let i = 0; i < vetTipoRebanho.length; i++) {
        if (vetTipoRebanho[i] == animal || animal == "") {
            strListarAnimal += vetAnimal[i] + "\t\t";
            strListarAnimal += vetTipoRebanho[i] + "\t\t";
            strListarAnimal += vetPeso[i] + "\n";
        }
    }
    return strListarAnimal;
}


function listar() {
    var tipoAnimal = inTipoAnimal.options[inTipoAnimal.selectedIndex].value;


    switch (tipoAnimal) {
        case "SUINO":
            outMsg.textContent = listarTipo("SUINO");

            break;

        case "CAPRINO":
            outMsg.textContent = listarTipo("CAPRINO");
            break;

        case "OVINO":
            outMsg.textContent = listarTipo("OVINO");
            break;

        case "Todos os Animais":
            outMsg.textContent = listarTipo("");
        /*var strListarAnimal = "Animal:\t\tTipo Animal:\t\tPeso:(Kg)\n\n";

        for(let i = 0; i < vetTipoRebanho.length; i++){
                strListarAnimal += vetAnimal[i] + "\t\t";
                strListarAnimal += vetTipoRebanho[i] + "\t\t";
                strListarAnimal += vetPeso[i] + "\n\n";
        }
        outMsg.textContent = strListarAnimal;
        */
    }

}

btListar.addEventListener('click', listar);

function filtrarPorPeso() {
    var peso = Number(inPeso.value);
    var tipoAnimal = inTipoAnimal.options[inTipoAnimal.selectedIndex].value;
    

    if (inPeso.value == '' || peso <= 0) {
        alert('Preencha os campos corretamente')
    } else {
        var strListarAnimal = "Animal:\t\tTipo Animal:\t\tPeso:(Kg)\n\n";
        for (let i = 0; i < vetAnimal.length; i++) {
            if (vetPeso[i] <= peso && (vetTipoRebanho[i] == tipoAnimal || tipoAnimal == "Todos os Animais") ){
                strListarAnimal += vetAnimal[i] + "\t\t";
                strListarAnimal += vetTipoRebanho[i] + "\t\t";
                strListarAnimal += vetPeso[i] + "\n";
            }
        }
        outMsg.textContent = strListarAnimal
    }

}

btFiltrar.addEventListener('click', filtrarPorPeso);
 
 function calcularMedia(){
    var peso = Number(inPeso.value);
    var tipoAnimal = inTipoAnimal.options[inTipoAnimal.selectedIndex].value;
    var strListarAnimal = "Soma total dos pesos:\t\tMédia dos pesos:\n";
    var soma = 0;
    var media = 0;

    
    for (let i = 0; i < vetAnimal.length; i++){
        if(vetTipoRebanho[i] == tipoAnimal || tipoAnimal == "Todos os Animais"){
             soma += vetPeso[i] 
        }
    }
 }

 btMedia.addEventListener('click', calcularMedia)