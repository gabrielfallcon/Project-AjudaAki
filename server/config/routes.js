const express = require('express');

const ajuda   = require('../api/ajuda')


module.exports = function (server) {

    //definir a URL base para todas as rotas
    const router = express.Router();
    server.use('/ajuda', router);
    
    //rotas relacionadas às operações com cursos e contatos    
    ajuda.register(router, '/cadastro');
    
};