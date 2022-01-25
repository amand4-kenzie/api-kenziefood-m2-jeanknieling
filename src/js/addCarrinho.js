import {ModelCarrinho} from '../models/modelCarrinho.js'

class Carrinho {
    constructor(){
        this.carrinho = []
    }
    addCarrinho (idProduto, produtos){
        const lista = document.getElementById("produtos-carrinho");
        const produtoFiltrado  = produtos.find((produto)=>produto.id == idProduto)

        this.carrinho.push(produtoFiltrado)
        ModelCarrinho.montarCarrinho(this.carrinho, ModelCarrinho.templateCarrinho,lista)
    }
}

export { Carrinho }