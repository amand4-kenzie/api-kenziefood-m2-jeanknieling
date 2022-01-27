import { ModelCarrinho } from '../models/modelCarrinho.js'
import {  ModelVitrine } from "../models/modelVitrine.js";
import {    ModelApi   } from "../models/modelApi.js";
import {    Carrinho   } from "./carrinho.js";
import {    Buscar     } from "./filtroProdutos.js";


const botaoTodos = document.querySelector("#everyone");
const botaoFrutas = document.querySelector("#frutas");
const botaoPanificadora = document.querySelector("#panificadora");
const botaoBebidas = document.querySelector("#bebidas");
const sessaoProdutos = document.querySelector('.vitrine-produtos ul');
const sessaoCarrinho = document.querySelector(".vitrine-carrinho");
const footerCarrinho = document.querySelector('.footer-carrinho');

ModelCarrinho.montarFooterCarrinho(footerCarrinho);

const pPrecoTotalCarrinho = document.querySelector('#p-precoTotal');
const pQntCarrinho = document.querySelector('#p-valorQnt');
const pgCadastro = document.querySelector('#pgCadastro')

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
        carrinho.footerCarrinho(pQntCarrinho, pPrecoTotalCarrinho);
    }})

sessaoCarrinho.addEventListener('click', (evt) => {
    const buttonDeletar = evt.target
    if(buttonDeletar.tagName === "BUTTON"){
        const idProduto = buttonDeletar.getAttribute('data-id')
        carrinho.deleteCarrinho(idProduto,api)
        carrinho.footerCarrinho(pQntCarrinho, pPrecoTotalCarrinho);
    }
})

window.onload = carrinho.manterCarrinho()
pgCadastro.addEventListener('click', () => window.location.href = './paginaCadastro.html')
