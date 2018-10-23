'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var UsuarioGimnasiosRsrc = require(__base + 'server/infrastructure/repositories').usuarioGimnasio;

function getUsuarioGimnasio(id) {
    var result;
    console.log('get UsuarioGimnasio by ' + id);
    try {
        if(id){
            result = await (UsuarioGimnasiosRsrc.getUsuarioGimnasio(id));
        } else {
            result = await (UsuarioGimnasiosRsrc.getUsuarioGimnasios());
        }
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { usuarioGimnasio: result };
}

function updateUsuarioGimnasio(usuarioGimnasio) {
    var result;
    console.log('update UsuarioGimnasio by ' + usuarioGimnasio._id);
    try {
        result = await (UsuarioGimnasiosRsrc.updateUsuarioGimnasio(usuarioGimnasio));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { usuarioGimnasio: result };
}

function deleteUsuarioGimnasio(id) {
    var result;
    console.log('delete UsuarioGimnasio by ' + id);
    try {
        result = await (UsuarioGimnasiosRsrc.deleteUsuarioGimnasio(id));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { usuarioGimnasio: result };
}

function postUsuarioGimnasio(usuarioGimnasio) {
    var result;
    console.log('post UsuarioGimnasio service',usuarioGimnasio);
    try {
        result = await (UsuarioGimnasiosRsrc.addUsuarioGimnasio(usuarioGimnasio));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { usuarioGimnasio: result };
}

module.exports.getUsuarioGimnasio = async(getUsuarioGimnasio);
module.exports.updateUsuarioGimnasio = async(updateUsuarioGimnasio);
module.exports.deleteUsuarioGimnasio = async(deleteUsuarioGimnasio);
module.exports.postUsuarioGimnasio = async(postUsuarioGimnasio);
