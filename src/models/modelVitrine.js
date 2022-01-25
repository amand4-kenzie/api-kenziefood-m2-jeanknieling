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
    
        li.setAttribute('data-id', id)
        li.classList.add('lista-vitrine')
        nomeProduto.innerText = nome
        precoProduto.innerText = `R$ ${preco.toFixed(2).replace('.', ',')}`
        descricaoProduto.innerText = descricao
        categoriaProduto.innerText = categoria
        buttonAdd.id = 'AddCarrinho'
        imgButton.src = "https://img.icons8.com/plasticine/100/000000/buy--v1.png"
        categoriaProduto.classList.add('categoria')
    
        img.src = imagem
        img.alt = nome  
    
        li.appendChild(img)
        li.appendChild(categoriaProduto)
        li.appendChild(nomeProduto)
        li.appendChild(descricaoProduto)
        li.appendChild(precoProduto)  
        li.appendChild(buttonAdd)
        buttonAdd.appendChild(imgButton)
        
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