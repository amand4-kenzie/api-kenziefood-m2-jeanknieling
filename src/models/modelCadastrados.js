const pgCadastro = document.querySelector('#lista-cadastrados')
async function getProducts () {
    return  fetch('https://kenzie-food-api.herokuapp.com/my/product',
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'TOKEN ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImlhdCI6MTY0MzExNzA3NCwiZXhwIjoxNjQzOTgxMDc0LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.msn6yDBwl9e_0200D5jg11ty3-mjPB2V0a5_-NUlZ44'
        },
    }
    )
    .then(response => response.json())
    .then(data => {
        console.log(data)
        montarVitrine(data, template, pgCadastro)
    })
}
getProducts()

function template ({id, imagem,nome,preco,descricao,categoria}){
    const li = document.createElement('li')
    const img = document.createElement('img')
    const precoProduto = document.createElement('p')
    const descricaoProduto = document.createElement('p')
    const categoriaProduto = document.createElement('p')
    const idProd = document.createElement('p')
    const nomeProduto = document.createElement('h2')

    li.classList.add('lista-vitrine')
    nomeProduto.innerText = nome
    precoProduto.innerText = `R$ ${preco.toFixed(2).replace('.', ',')}`
    descricaoProduto.innerText = descricao
    categoriaProduto.innerText = categoria
    idProd.innerText = `ID do produto: ${id}`
    categoriaProduto.classList.add('categoria')

    img.src = imagem
    img.alt = nome
    li.appendChild(img)
    li.appendChild(categoriaProduto)
    li.appendChild(idProd)
    li.appendChild(nomeProduto)
    li.appendChild(descricaoProduto)
    li.appendChild(precoProduto)

    return li
 }

 function montarVitrine (arrayProdutos, callTemplateProduto, vitrine) {
    vitrine.innerHTML = ""
    arrayProdutos.forEach(function(produto){
        const templateProduto  = callTemplateProduto(produto)
       vitrine.appendChild(templateProduto)
    });
 }
