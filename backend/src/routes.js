const express = require('express');
const routes = express.Router();

const projetoController = require('./controller/projetoController');

routes.get('/projects', projetoController.index); //Listar todos os Projetos
routes.post('/projects/create', projetoController.create); //Criar um novo Cadastro de Projeto
routes.delete('/projects/:id', projetoController.delete); //Deletar um Projeto existente

module.exports = routes;
