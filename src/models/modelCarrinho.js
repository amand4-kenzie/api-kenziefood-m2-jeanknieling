class ModelCarrinho {
    static templateCarrinho ({imagem,nome,preco,categoria}){
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
}

export {ModelCarrinho}