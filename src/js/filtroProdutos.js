import { ModelVitrine } from "../models/modelVitrine.js";

class Buscar{
    constructor(){}
    
    static ul = document.getElementById("vitrine");

    buscarTodos(produtos) {
        const mostrarTodos = produtos.filter((produto) => produto);
        ModelVitrine.montarVitrine(mostrarTodos,ModelVitrine.template,Buscar.ul);
    }

    buscarFrutas(produtos){
        const mostrarFrutas = produtos.filter((produto) => produto.categoria === "Frutas");
        ModelVitrine.montarVitrine(mostrarFrutas,ModelVitrine.template,Buscar.ul);
    }

    buscarPanificadora(produtos){
        const mostrarPanificadora = produtos.filter((produto) => produto.categoria === "Panificadora");
        ModelVitrine.montarVitrine(mostrarPanificadora,ModelVitrine.template,Buscar.ul);
    }

    buscarBebidas(produtos){
        const mostrarBebidas = produtos.filter((produto) => produto.categoria === "Bebidas");
        ModelVitrine.montarVitrine(mostrarBebidas,ModelVitrine.template,Buscar.ul);
    }

    buscarDinamicamente(produtos, inputValue) {
        const mostrarProdutos = produtos.filter((produto) => {
            return produto.categoria.toLowerCase().includes(inputValue) || produto.nome.toLowerCase().includes(inputValue);
        });
        ModelVitrine.montarVitrine(mostrarProdutos,ModelVitrine.template,Buscar.ul);
    }
}

export { Buscar }