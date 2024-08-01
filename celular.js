const prompt = require("prompt-sync")();

const celulares = [];

const modelo = () => {
const dono = prompt("Nome do dono do aparelho? ");
const modeloC = prompt("Qual o modelo do aparelho? ");
const marca = prompt("Qual a marca do aparelho? ");
const CPU = prompt("Qual a CPU? ");
const ram = prompt("Qual a quantidade de memória ram do aparelho? ");
const memoria = +prompt("Qual a capacidade de armazenamento interno? ");
const camera = +prompt("Quantos megapixeis a camera possui? ");

if (dono != "" && modeloC != "" && marca != "" && CPU != "" && ram > 0 && memoria > 0 && camera > 0 ) {
    return {dono, modeloC, marca, CPU, ram, memoria, camera};

    } else console.log("Inválido");
};

const criar = () => {
    const novo = modelo();
    
    if(novo) {
        celulares.push(novo);
        console.log("Celular adicionado com sucesso!");
    }
};

const listar = () => {
    if (celulares.length == 0){
        console.log("Não há celulares disponíveis!");
    }
    celulares.forEach((el, i) => {
        console.log(`${i + 1}
        Dono do Celular:${el.dono}
        Modelo:${el.modeloC}
        Marca:${el.marca}
        CPU:${el.cpu}
        RAM:${el.ram}
        Armazenamento:${el.memoria}
        Camera:${el.camera}    
        `);
    });
};

const atualizar = () => {
    listar()

    const indice = prompt("Qual o indice que você deseja atualizar? ") - 1
    const novo = modelo()

    if (novo && indice >= 0 && indice < celulares.length) {
        celulares[indice] = novo
        console.log("Atualizado com sucesso!")
    }else
        console.log("Inválido")
}
    
    const remover = () => {
        listar()
        
        if(indice >= 0 && indice < celulares.length){
            celulares.splice(indice, 1)
            console.log("Celular removido com sucesso!")
        }else 
           console.log("Inválido")
    
    
} 

module.exports = {
    criar, 
    remover, 
    listar,
    atualizar
}