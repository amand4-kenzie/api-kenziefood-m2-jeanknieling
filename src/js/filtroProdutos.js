import { ModelVitrine } from "../models/modelVitrine.js"

class Buscar{
    constructor(){}
    
    buscarTodos(produtos) {
        const mostrarTodos = produtos.filter((produto) => produto);
        const ul = document.getElementById("vitrine");
        ModelVitrine.montarVitrine(mostrarTodos,ModelVitrine.template,ul);
    }
    buscarFrutas(produtos){
        const mostrarFrutas = produtos.filter((produto) => produto.categoria === "Frutas");
        const ul = document.getElementById("vitrine");
        ModelVitrine.montarVitrine(mostrarFrutas,ModelVitrine.template,ul);
    }
    buscarPanificadora(produtos){
        const mostrarPanificadora = produtos.filter((produto) => produto.categoria === "Panificadora");
        const ul = document.getElementById("vitrine");
        ModelVitrine.montarVitrine(mostrarPanificadora,ModelVitrine.template,ul);
    }
    buscarBebidas(produtos){
        const mostrarBebidas = produtos.filter((produto) => produto.categoria === "Bebidas");
        const ul = document.getElementById("vitrine");
        ModelVitrine.montarVitrine(mostrarBebidas,ModelVitrine.template,ul);
    }
}

export { Buscar }