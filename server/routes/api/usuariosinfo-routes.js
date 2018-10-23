'use strict';
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getUsuarioInfos(request, response) {
    console.log('GET UsuarioInfo');
    var result;
    try {
        result = await (service.usuarioInfosService.getUsuarioInfo(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        console.log('error',error);
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteUsuarioInfo(request, response) {
    console.log('DELETE UsuarioInfo');
    var result;
    try {
        result = await (service.usuarioInfosService.deleteUsuarioInfo(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateUsuarioInfo(request, response) {
    console.log('UPDATE UsuarioInfo');
    var result;
    try {
        result = await (service.usuarioInfosService.updateUsuarioInfo(request.body.usuarioInfo));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function postUsuarioInfo(request, response) {
    console.log('POST UsuarioInfo',request.body);
    var result;
    try {
        result = await (service.usuarioInfosService.postUsuarioInfo(request.body.usuarioInfo));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        if(error.code === 11000){
            return handlers.validationErrorHandler(response, error);
        }
        return handlers.errorResponseHandler(response, error);
    }
}

routes.get('/:id', async(getUsuarioInfos));
routes.get('/', async(getUsuarioInfos));
routes.delete('/:id', async(deleteUsuarioInfo));
routes.put('/:id', async(updateUsuarioInfo));
routes.post('/', async(postUsuarioInfo));

module.exports = routes;