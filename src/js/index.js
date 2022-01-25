import { ModelApi } from "../models/modelApi.js";
import { ModelVitrine } from "../models/modelVitrine.js";
import { Buscar } from "./filtroProdutos.js";

const botaoTodos = document.querySelector("#everyone");
const botaoFrutas = document.querySelector("#frutas");
const botaoPanificadora = document.querySelector("#panificadora");
const botaoBebidas = document.querySelector("#bebidas");

const api = await ModelApi.fetchProducts()
const ul = document.getElementById('vitrine')

botaoTodos.addEventListener('click', () => filtros.buscarTodos(api));
botaoFrutas.addEventListener('click', () => filtros.buscarFrutas(api));
botaoPanificadora.addEventListener('click', () => filtros.buscarPanificadora(api));
botaoBebidas.addEventListener('click', () => filtros.buscarBebidas(api));


ModelVitrine.montarVitrine(api, ModelVitrine.template, ul)
const filtros = new Buscar()
