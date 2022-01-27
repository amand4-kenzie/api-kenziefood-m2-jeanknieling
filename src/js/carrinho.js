import { ModelCarrinho } from '../models/modelCarrinho.js'

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

   deleteCarrinho(idProduto){ 
     
        const lista = document.getElementById("produtos-carrinho"); 
        const produtoFiltrado = this.produtosStorage.find(({id}) => idProduto == id) 
        
        const indexProdutosFiltrado = this.produtosStorage.indexOf(produtoFiltrado) 
        
        this.produtosStorage.splice(indexProdutosFiltrado, 1) 
        localStorage.setItem('produtos', JSON.stringify(this.produtosStorage))

        ModelCarrinho.montarCarrinho(this.produtosStorage, ModelCarrinho.templateCarrinho,lista) 
    }

    manterCarrinho (){
        const lista = document.getElementById("produtos-carrinho");
        ModelCarrinho.montarCarrinho(this.produtosStorage, ModelCarrinho.templateCarrinho,lista)
    }

    footerCarrinho(pQntCarrinho, pPrecoTotalCarrinho) {
        console.log(pQntCarrinho, pPrecoTotalCarrinho)
        const precoTotal = this.produtosStorage.reduce((acc, {preco}) => acc  + preco, 0).toFixed(2);
        const quantidade = this.produtosStorage.length;
        pQntCarrinho.innerText= quantidade;
        pPrecoTotalCarrinho.innerText = precoTotal;
    }
}

export { Carrinho }