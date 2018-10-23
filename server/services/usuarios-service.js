'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var UsuariosRsrc = require(__base + 'server/infrastructure/repositories').usuario;

function getUsuario(id) {
    var result;
    console.log('get Usuario by ' + id);
    try {
        if(id){
            result = await (UsuariosRsrc.getUsuario(id));
        } else {
            result = await (UsuariosRsrc.getUsuarios());
        }
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { usuario: result };
}

function updateUsuario(usuario) {
    var result;
    console.log('update Usuario by ' + usuario._id);
    try {
        result = await (UsuariosRsrc.updateUsuario(usuario));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { usuario: result };
}

function deleteUsuario(id) {
    var result;
    console.log('delete Usuario by ' + id);
    try {
        result = await (UsuariosRsrc.deleteUsuario(id));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { usuario: result };
}

function postUsuario(usuario) {
    var result;
    console.log('post Usuario service',usuario);
    try {
        result = await (UsuariosRsrc.addUsuario(usuario));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { usuario: result };
}

module.exports.getUsuario = async(getUsuario);
module.exports.updateUsuario = async(updateUsuario);
module.exports.deleteUsuario = async(deleteUsuario);
module.exports.postUsuario = async(postUsuario);
