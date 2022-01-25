import { ModelApi } from "../models/modelApi.js";
import { ModelVitrine } from "../models/modelVitrine.js";
import { Carrinho } from "./addCarrinho.js";
import { Buscar } from "./filtroProdutos.js";

const botaoTodos = document.querySelector("#everyone");
const botaoFrutas = document.querySelector("#frutas");
const botaoPanificadora = document.querySelector("#panificadora");
const botaoBebidas = document.querySelector("#bebidas");
const sessaoProdutos = document.querySelector('.vitrine-produtos ul')

const api = await ModelApi.fetchProducts();
const ul = document.getElementById('vitrine');

botaoTodos.addEventListener('click', () => filtros.buscarTodos(api));
botaoFrutas.addEventListener('click', () => filtros.buscarFrutas(api));
botaoPanificadora.addEventListener('click', () => filtros.buscarPanificadora(api));
botaoBebidas.addEventListener('click', () => filtros.buscarBebidas(api));


ModelVitrine.montarVitrine(api, ModelVitrine.template, ul);
const filtros = new Buscar();

const input = document.querySelector('#pesquisar');
input.addEventListener('keyup', () => filtros.buscarDinamicamente(api, input.value.toLowerCase()));

const carrinho = new Carrinho()

sessaoProdutos.addEventListener('click', (evt) => {
    const buttonComprar = evt.target
    if(buttonComprar.tagName === "BUTTON"){
        const idProduto = buttonComprar.getAttribute('data-id')
        carrinho.addCarrinho(idProduto,api)
    }
})