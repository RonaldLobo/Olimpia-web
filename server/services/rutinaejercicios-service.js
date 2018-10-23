'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var RutinaEjerciciosRsrc = require(__base + 'server/infrastructure/repositories').rutinaEjercicio;

function getRutinaEjercicio(id) {
    var result;
    console.log('get RutinaEjercicio by ' + id);
    try {
        if(id){
            result = await (RutinaEjerciciosRsrc.getRutinaEjercicio(id));
        } else {
            result = await (RutinaEjerciciosRsrc.getRutinaEjercicios());
        }
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { rutinaEjercicio: result };
}

function updateRutinaEjercicio(rutinaEjercicio) {
    var result;
    console.log('update RutinaEjercicio by ' + rutinaEjercicio._id);
    try {
        result = await (RutinaEjerciciosRsrc.updateRutinaEjercicio(rutinaEjercicio));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { rutinaEjercicio: result };
}

function deleteRutinaEjercicio(id) {
    var result;
    console.log('delete RutinaEjercicio by ' + id);
    try {
        result = await (RutinaEjerciciosRsrc.deleteRutinaEjercicio(id));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { rutinaEjercicio: result };
}

function postRutinaEjercicio(rutinaEjercicio) {
    var result;
    console.log('post RutinaEjercicio service',rutinaEjercicio);
    try {
        result = await (RutinaEjerciciosRsrc.addRutinaEjercicio(rutinaEjercicio));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { rutinaEjercicio: result };
}

module.exports.getRutinaEjercicio = async(getRutinaEjercicio);
module.exports.updateRutinaEjercicio = async(updateRutinaEjercicio);
module.exports.deleteRutinaEjercicio = async(deleteRutinaEjercicio);
module.exports.postRutinaEjercicio = async(postRutinaEjercicio);
