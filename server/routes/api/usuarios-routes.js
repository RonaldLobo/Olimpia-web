'use strict';
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getUsuarios(request, response) {
    console.log('GET Usuario');
    var result;
    try {
        result = await (service.usuariosService.getUsuario(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        console.log('error',error);
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteUsuario(request, response) {
    console.log('DELETE Usuario');
    var result;
    try {
        result = await (service.usuariosService.deleteUsuario(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateUsuario(request, response) {
    console.log('UPDATE Usuario');
    var result;
    try {
        result = await (service.usuariosService.updateUsuario(request.body.usuario));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function postUsuario(request, response) {
    console.log('POST Usuario',request.body);
    var result;
    try {
        result = await (service.usuariosService.postUsuario(request.body.usuario));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        if(error.code === 11000){
            return handlers.validationErrorHandler(response, error);
        }
        return handlers.errorResponseHandler(response, error);
    }
}

routes.get('/:id', async(getUsuarios));
routes.get('/', async(getUsuarios));
routes.delete('/:id', async(deleteUsuario));
routes.put('/:id', async(updateUsuario));
routes.post('/', async(postUsuario));

module.exports = routes;