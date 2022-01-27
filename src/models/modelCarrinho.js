class ModelCarrinho {

    static templateCarrinho({imagem,nome,preco,categoria}){
        const li = document.createElement('li')
        const img = document.createElement('img')
        const precoProduto = document.createElement('p')
        const categoriaProduto = document.createElement('p')
        const nomeProduto = document.createElement('h2')
        const buttonRemove = document.createElement('button')

        li.classList.add('carrinho')
        nomeProduto.innerText = nome
        precoProduto.innerText = `R$ ${preco.toFixed(2).replace('.', ',')}`
        categoriaProduto.innerText = categoria
        buttonRemove.id = 'remove'

        img.src = imagem
        img.alt = nome  

        li.appendChild(img)
        li.appendChild(nomeProduto)
        li.appendChild(buttonRemove)
        li.appendChild(categoriaProduto)
        li.appendChild(precoProduto) 
        

        return li
    }

    static montarCarrinho (arrayProdutos, callTemplateProduto, vitrine) {
        vitrine.innerHTML = ""

        arrayProdutos.forEach(function(produto){
            const templateProduto  = callTemplateProduto(produto)
           vitrine.appendChild(templateProduto)
        });
    }

    static montarFooterCarrinho(footerCarrinho) {
        const divQuantidade = document.createElement('div');
        const divPrecoTotal = document.createElement('div');
        const pQuantidade = document.createElement('p');
        const pValorQuantidade = document.createElement('p');
        const pPrecoTotal = document.createElement('p');
        const pValorPreco = document.createElement('p');

        pQuantidade.innerText = 'Quantidade';
        pValorQuantidade.innerText = '0';
        pValorQuantidade.id = 'p-valorQnt';
        pPrecoTotal.innerText = 'Total';
        pValorPreco.innerText = '0';
        pValorPreco.id = 'p-precoTotal';
        divQuantidade.classList.add('footer-qntCarrinho');
        divPrecoTotal.classList.add('footer-precoTotal');

        divQuantidade.appendChild(pQuantidade);
        divQuantidade.appendChild(pValorQuantidade);
        divPrecoTotal.appendChild(pPrecoTotal);
        divPrecoTotal.appendChild(pValorPreco);
        footerCarrinho.appendChild(divQuantidade);
        footerCarrinho.appendChild(divPrecoTotal);

        return footerCarrinho;
    }
}

export { ModelCarrinho }