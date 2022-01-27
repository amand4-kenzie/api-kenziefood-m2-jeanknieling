const registerForm = document.getElementById("register-form");

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
    .catch((error) => error);
    return response
}
registerForm.addEventListener("submit", handleSubmit);