'use strict';
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getRutinas(request, response) {
    console.log('GET rutina',request.params.id);
    var result;
    try {
        result = await (service.rutinasService.getRutina(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        console.log('error',error);
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteRutinas(request, response) {
    console.log('DELETE rutina');
    var result;
    try {
        result = await (service.rutinasService.deleteRutina(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateRutinas(request, response) {
    console.log('UPDATE rutina');
    var result;
    try {
        result = await (service.rutinasService.updateRutina(request.body.rutina));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function postRutinas(request, response) {
    console.log('POST rutina');
    var result;
    try {
        result = await (service.rutinasService.postRutina(request.body.rutina));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        if(error.code === 11000){
            return handlers.validationErrorHandler(response, error);
        }
        return handlers.errorResponseHandler(response, error);
    }
}

routes.get('/:id', async(getRutinas));
routes.get('/', async(getRutinas));
routes.delete('/:id', async(deleteRutinas));
routes.put('/:id', async(updateRutinas));
routes.post('/', async(postRutinas));

module.exports = routes;