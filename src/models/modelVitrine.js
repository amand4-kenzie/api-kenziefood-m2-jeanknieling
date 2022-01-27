class ModelVitrine {
 
     static template ({id,imagem,nome,preco,descricao,categoria}){
        const li = document.createElement('li')
        const img = document.createElement('img')
        const imgButton = document.createElement('img')
        const precoProduto = document.createElement('p')
        const descricaoProduto = document.createElement('p')
        const categoriaProduto = document.createElement('p')
        const nomeProduto = document.createElement('h2')
        const buttonAdd = document.createElement('button')
    
        li.classList.add('lista-vitrine')
        nomeProduto.innerText = nome
        precoProduto.innerText = `R$ ${preco.toFixed(2).replace('.', ',')}`
        descricaoProduto.innerText = descricao
        categoriaProduto.innerText = categoria
        buttonAdd.classList.add('addCarrinho')
        buttonAdd.setAttribute('data-id', id)
        categoriaProduto.classList.add('categoria')
    
        img.src = imagem
        img.alt = nome  
    
        li.appendChild(img)
        li.appendChild(categoriaProduto)
        li.appendChild(nomeProduto)
        li.appendChild(descricaoProduto)
        li.appendChild(precoProduto)  
        li.appendChild(buttonAdd)
        
        return li
     }

     static montarVitrine (arrayProdutos, callTemplateProduto, vitrine) {
        vitrine.innerHTML = ""

        arrayProdutos.forEach(function(produto){
            const templateProduto  = callTemplateProduto(produto)
           vitrine.appendChild(templateProduto)
        });
     }
}

export { ModelVitrine }