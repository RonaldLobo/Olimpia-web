'use strict';
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getRutinaEjercicios(request, response) {
    console.log('GET rutinaEjercicio',request.params.id);
    var result;
    try {
        result = await (service.rutinaEjerciciosService.getRutinaEjercicio(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        console.log('error',error);
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteRutinaEjercicios(request, response) {
    console.log('DELETE rutinaEjercicio');
    var result;
    try {
        result = await (service.rutinaEjerciciosService.deleteRutinaEjercicio(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateRutinaEjercicios(request, response) {
    console.log('UPDATE rutinaEjercicio');
    var result;
    try {
        result = await (service.rutinaEjerciciosService.updateRutinaEjercicio(request.body.rutinaEjercicio));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function postRutinaEjercicios(request, response) {
    console.log('POST rutinaEjercicio');
    var result;
    try {
        result = await (service.rutinaEjerciciosService.postRutinaEjercicio(request.body.rutinaEjercicio));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        if(error.code === 11000){
            return handlers.validationErrorHandler(response, error);
        }
        return handlers.errorResponseHandler(response, error);
    }
}

routes.get('/:id', async(getRutinaEjercicios));
routes.get('/', async(getRutinaEjercicios));
routes.delete('/:id', async(deleteRutinaEjercicios));
routes.put('/:id', async(updateRutinaEjercicios));
routes.post('/', async(postRutinaEjercicios));

module.exports = routes;