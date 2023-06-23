console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,   
);

const idadeComprador = 17; 
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis");
console.log(listaDeDestinos);

// if(idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1); //removendo um item
// }else if(estaAcompanhada == true){
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1,1);
// }else{ 
//     console.log("Não é maior de idade e não posso vender");
// }

if(
    idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!!");
    listaDeDestinos.splice(1,1); //removendo um item
}else{ 
    console.log("Não é maior de idade e não posso vender");
}

console.log(listaDeDestinos);

// console.log(IdadeComprador > 18);
// console.log(IdadeComprador < 18);
// console.log(IdadeComprador <= 18);
// console.log(IdadeComprador >= 18);
// console.log(IdadeComprador == 18);