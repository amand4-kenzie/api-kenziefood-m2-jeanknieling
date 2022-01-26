import {ModelCarrinho} from '../models/modelCarrinho.js'

class Carrinho {
    constructor(){
        this.produtosStorage = localStorage.getItem('produtos') ? JSON.parse(localStorage.getItem('produtos')) : []
    }
    addCarrinho (idProduto, produtos){
        
        const lista = document.getElementById("produtos-carrinho");
        const produtoFiltrado  = produtos.find((produto)=>produto.id == idProduto)

        this.produtosStorage.push(produtoFiltrado)
        localStorage.setItem('produtos', JSON.stringify(this.produtosStorage))

        ModelCarrinho.montarCarrinho(this.produtosStorage, ModelCarrinho.templateCarrinho,lista)
    }
    deleteCarrinho(idProduto, produtos){
            
        const lista = document.getElementById("produtos-carrinho");
        const produtoFiltrado  = produtos.find((produto)=>produto.id == idProduto)
        const index = produtos.indexOf(produtoFiltrado);

        this.produtosStorage.splice(index, 1)
        localStorage.setItem('produtos', JSON.stringify(this.produtosStorage))

        ModelCarrinho.montarCarrinho(this.produtosStorage, ModelCarrinho.templateCarrinho,lista)
        
    }
    manterCarrinho (){
        const lista = document.getElementById("produtos-carrinho");
        ModelCarrinho.montarCarrinho(this.produtosStorage, ModelCarrinho.templateCarrinho,lista)
    }
}

export { Carrinho }