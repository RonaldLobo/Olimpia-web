'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var EjerciciosRsrc = require(__base + 'server/infrastructure/repositories').ejercicio;

function getEjercicio(id) {
    var result;
    console.log('get Ejercicio by ' + id);
    try {
        if(id){
            result = await (EjerciciosRsrc.getEjercicio(id));
        } else {
            result = await (EjerciciosRsrc.getEjercicios());
        }
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { ejercicio: result };
}

function updateEjercicio(ejercicio) {
    var result;
    console.log('update Ejercicio by ' + ejercicio._id);
    try {
        result = await (EjerciciosRsrc.updateEjercicio(ejercicio));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { ejercicio: result };
}

function deleteEjercicio(id) {
    var result;
    console.log('delete Ejercicio by ' + id);
    try {
        result = await (EjerciciosRsrc.deleteEjercicio(id));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { ejercicio: result };
}

function postEjercicio(ejercicio) {
    var result;
    console.log('post Ejercicio service',ejercicio);
    try {
        result = await (EjerciciosRsrc.addEjercicio(ejercicio));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { ejercicio: result };
}

module.exports.getEjercicio = async(getEjercicio);
module.exports.updateEjercicio = async(updateEjercicio);
module.exports.deleteEjercicio = async(deleteEjercicio);
module.exports.postEjercicio = async(postEjercicio);
