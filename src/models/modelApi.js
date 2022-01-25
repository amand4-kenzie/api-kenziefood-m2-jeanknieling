class ModelApi {
    constructor(){}

    static async fetchProducts () {
    
        return fetch('https://kenzie-food-api.herokuapp.com/product')
        .then(response => response.json())
    }
}
export {ModelApi}