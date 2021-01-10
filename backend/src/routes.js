const express = require('express');
const routes =express.Router();


const projetoController = require('./controller/projetoController');


routes.get('/project', projetoController.index); //Listar todos os Projetos
routes.post('/project/create', projetoController.create); //Criar um novo Cadastro de Projeto
routes.delete('/project/delete/:id', projetoController.delete); //Deletar um Projeto existente
routes.delete('/project/update:id', projetoController.update); //Editar um Projeto existente


module.exports = routes;
