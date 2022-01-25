import { ModelApi } from "../models/modelApi.js";
import { ModelVitrine } from "../models/modelVitrine.js";

const api = await ModelApi.fetchProducts()
const ul = document.getElementById('vitrine')

ModelVitrine.montarVitrine(api, ModelVitrine.template, ul)

