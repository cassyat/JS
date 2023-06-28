console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,   
);

const idadeComprador = 20; 
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\n Destinos possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
while(contador<3){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe");
    }else{
        console.log("Destino não existe");
    }
    contador +=1;
}
