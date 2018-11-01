'use strict';
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getUsuarioGimnasios(request, response) {
    console.log('GET UsuarioGimnasio');
    var result;
    try {
        result = await (service.usuarioGimnasiosService.getUsuarioGimnasio(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        console.log('error',error);
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteUsuarioGimnasio(request, response) {
    console.log('DELETE UsuarioGimnasio');
    var result;
    try {
        result = await (service.usuarioGimnasiosService.deleteUsuarioGimnasio(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateUsuarioGimnasio(request, response) {
    console.log('UPDATE UsuarioGimnasio');
    var result;
    try {
        result = await (service.usuarioGimnasiosService.updateUsuarioGimnasio(request.body.usuarioGimnasio));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function postUsuarioGimnasio(request, response) {
    console.log('POST UsuarioGimnasio',request.body);
    var result;
    try {
        result = await (service.usuarioGimnasiosService.postUsuarioGimnasio(request.body.usuarioGimnasio));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        if(error.code === 11000){
            return handlers.validationErrorHandler(response, error);
        }
        return handlers.errorResponseHandler(response, error);
    }
}

routes.get('/:id', async(getUsuarioGimnasios));
routes.get('/', async(getUsuarioGimnasios));
routes.delete('/:id', async(deleteUsuarioGimnasio));
routes.put('/:id', async(updateUsuarioGimnasio));
routes.post('/', async(postUsuarioGimnasio));

module.exports = routes;