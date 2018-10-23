'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var RutinasRsrc = require(__base + 'server/infrastructure/repositories').rutina;

function getRutina(id) {
    var result;
    console.log('get Rutina by ' + id);
    try {
        if(id){
            result = await (RutinasRsrc.getRutina(id));
        } else {
            result = await (RutinasRsrc.getRutinas());
        }
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { rutina: result };
}

function updateRutina(rutina) {
    var result;
    console.log('update Rutina by ' + rutina._id);
    try {
        result = await (RutinasRsrc.updateRutina(rutina));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { rutina: result };
}

function deleteRutina(id) {
    var result;
    console.log('delete Rutina by ' + id);
    try {
        result = await (RutinasRsrc.deleteRutina(id));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { rutina: result };
}

function postRutina(rutina) {
    var result;
    console.log('post Rutina service',rutina);
    try {
        result = await (RutinasRsrc.addRutina(rutina));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { rutina: result };
}

module.exports.getRutina = async(getRutina);
module.exports.updateRutina = async(updateRutina);
module.exports.deleteRutina = async(deleteRutina);
module.exports.postRutina = async(postRutina);
