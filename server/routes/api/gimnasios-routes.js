'use strict';
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getGimnasios(request, response) {
    console.log('GET gimnasio',request.params.id);
    var result;
    try {
        result = await (service.gimnasiosService.getGimnasio(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        console.log('error',error);
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteGimnasios(request, response) {
    console.log('DELETE gimnasio');
    var result;
    try {
        result = await (service.gimnasiosService.deleteGimnasio(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateGimnasios(request, response) {
    console.log('UPDATE gimnasio');
    var result;
    try {
        result = await (service.gimnasiosService.updateGimnasio(request.body.gimnasio));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function postGimnasios(request, response) {
    console.log('POST gimnasio');
    var result;
    try {
        result = await (service.gimnasiosService.postGimnasio(request.body.gimnasio));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        if(error.code === 11000){
            return handlers.validationErrorHandler(response, error);
        }
        return handlers.errorResponseHandler(response, error);
    }
}

routes.get('/:id', async(getGimnasios));
routes.get('/', async(getGimnasios));
routes.delete('/:id', async(deleteGimnasios));
routes.put('/:id', async(updateGimnasios));
routes.post('/', async(postGimnasios));

module.exports = routes;