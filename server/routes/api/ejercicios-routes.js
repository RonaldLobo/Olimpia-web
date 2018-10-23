'use strict';
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getEjercicios(request, response) {
    console.log('GET ejercicio',request.params.id);
    var result;
    try {
        result = await (service.ejerciciosService.getEjercicio(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        console.log('error',error);
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteEjercicios(request, response) {
    console.log('DELETE ejercicio');
    var result;
    try {
        result = await (service.ejerciciosService.deleteEjercicio(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateEjercicios(request, response) {
    console.log('UPDATE ejercicio');
    var result;
    try {
        result = await (service.ejerciciosService.updateEjercicio(request.body.ejercicio));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function postEjercicios(request, response) {
    console.log('POST ejercicio');
    var result;
    try {
        result = await (service.ejerciciosService.postEjercicio(request.body.ejercicio));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        if(error.code === 11000){
            return handlers.validationErrorHandler(response, error);
        }
        return handlers.errorResponseHandler(response, error);
    }
}

routes.get('/:id', async(getEjercicios));
routes.get('/', async(getEjercicios));
routes.delete('/:id', async(deleteEjercicios));
routes.put('/:id', async(updateEjercicios));
routes.post('/', async(postEjercicios));

module.exports = routes;