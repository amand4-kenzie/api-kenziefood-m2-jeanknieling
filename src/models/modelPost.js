const registerForm = document.getElementById("register-form");
const udpdateForm = document.getElementById('update-form')
const deleteForm = document.getElementById('delete-form')

async function handleSubmit(e) {
    e.preventDefault()
    let data = {};
    const elements =  registerForm.elements; // Retorna todos os campos de formulário
    for (let i = 0; i < elements.length; i++) {
      let item = elements[i];
      if (item.name !== "") {
        data[item.name] = item.value;
      }
    }
    const response = await createProduct(data)
    return response
};
async function createProduct (data){
    const response = await fetch (
        'https://kenzie-food-api.herokuapp.com/my/product',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'TOKEN ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImlhdCI6MTY0MzExNzA3NCwiZXhwIjoxNjQzOTgxMDc0LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.msn6yDBwl9e_0200D5jg11ty3-mjPB2V0a5_-NUlZ44'
            },
            body: JSON.stringify(data)
        }
    )
    .then((res) => res.json())
    .then((res) => res)
    // {
    //     let sucesso = 'Produto cadastrado'
    //     data.forEach((item,i) => {
    //         if (item[i] !== null){
    //             notificacaoAddProduto(sucesso, true)
    //         }
    //     })
    // })
    .catch((error) => error)
    return response
}
registerForm.addEventListener("submit", handleSubmit);

async function patchProducts (data,id) {
    const response = fetch(`https://kenzie-food-api.herokuapp.com/my/product/${id}`,
    {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'TOKEN ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImlhdCI6MTY0MzExNzA3NCwiZXhwIjoxNjQzOTgxMDc0LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.msn6yDBwl9e_0200D5jg11ty3-mjPB2V0a5_-NUlZ44'
        },
        body: JSON.stringify(data)
    }
    )
    .then((res) => res.json())
    .then((res) => res)
    // {
    //     if(id !== null){
    //         notificacaoAddProduto('Produto atualizado', true)
    //     }
    //     else {
    //         notificacaoAddProduto('Não foi possivel atualizar o produto', false)
    //     }
    // })
    .catch((error) => error);
    return response
}
async function updateFiles(e) {
    e.preventDefault()
    let data = {};
    const elements =  udpdateForm.elements; 
    for (let i = 0; i < elements.length; i++) {
      let item = elements[i];
      if (item.name !== "") {
        data[item.name] = item.value;
      }
    }
    const response = await patchProducts(data, data.idProduto)
    return response
};
udpdateForm.addEventListener('submit', updateFiles)

async function deleteProducts (data,id) {
    const response = fetch(`https://kenzie-food-api.herokuapp.com/my/product/${id}`,
    {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'TOKEN ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImlhdCI6MTY0MzExNzA3NCwiZXhwIjoxNjQzOTgxMDc0LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.msn6yDBwl9e_0200D5jg11ty3-mjPB2V0a5_-NUlZ44'
        },
        body: JSON.stringify(data)
    }
    )
    .then((res) => res.json())
    .then((res) => res)
    //     if(id === data.id){
    //         notificacaoAddProduto('Produto deletado', true)
    //     }
    //     else {
    //         notificacaoAddProduto('Não foi possivel atualizar o produto', false)
    //     }
    // })
    .catch((error) => error);
    return response
}
async function deleteFiles(e) {
    e.preventDefault()
    let data = {};
    const elements =  deleteForm.elements; 
    for (let i = 0; i < elements.length; i++) {
      let item = elements[i];
      if (item.name !== "") {
        data[item.name] = item.value;
      }
    }
    const response = await deleteProducts(data, data.idProduto)
    return response
};
deleteForm.addEventListener('submit', deleteFiles)

// function notificacaoAddProduto(mensagem, estado){
//     const tagNotificacao = document.querySelector(".notificacao")
//     const span = document.querySelector(".notificacao span")

//     if(estado === true){
//         tagNotificacao.classList.add("sucees")
//         span.innerText = mensagem
//     }else{
//         tagNotificacao.classList.add("error")
//         span.innerText = mensagem
//     }

//     setTimeout(() => {
//         tagNotificacao.classList.remove("sucees")
//         tagNotificacao.classList.remove("error")
//     }, 1800);
// }
