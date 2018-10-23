'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var GimnasiosRsrc = require(__base + 'server/infrastructure/repositories').gimnasio;

function getGimnasio(id) {
    var result;
    console.log('get Gimnasio by ' + id);
    try {
        if(id){
            result = await (GimnasiosRsrc.getGimnasio(id));
        } else {
            result = await (GimnasiosRsrc.getGimnasios());
        }
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { gimnasio: result };
}

function updateGimnasio(gimnasio) {
    var result;
    console.log('update Gimnasio by ' + gimnasio._id);
    try {
        result = await (GimnasiosRsrc.updateGimnasio(gimnasio));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { gimnasio: result };
}

function deleteGimnasio(id) {
    var result;
    console.log('delete Gimnasio by ' + id);
    try {
        result = await (GimnasiosRsrc.deleteGimnasio(id));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { gimnasio: result };
}

function postGimnasio(gimnasio) {
    var result;
    console.log('post Gimnasio service',gimnasio);
    try {
        result = await (GimnasiosRsrc.addGimnasio(gimnasio));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { gimnasio: result };
}

module.exports.getGimnasio = async(getGimnasio);
module.exports.updateGimnasio = async(updateGimnasio);
module.exports.deleteGimnasio = async(deleteGimnasio);
module.exports.postGimnasio = async(postGimnasio);
