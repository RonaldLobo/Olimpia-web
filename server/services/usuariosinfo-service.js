'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var UsuarioInfosRsrc = require(__base + 'server/infrastructure/repositories').usuarioInfo;

function getUsuarioInfo(id) {
    var result;
    console.log('get UsuarioInfo by ' + id);
    try {
        if(id){
            result = await (UsuarioInfosRsrc.getUsuarioInfo(id));
        } else {
            result = await (UsuarioInfosRsrc.getUsuarioInfos());
        }
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { usuarioInfo: result };
}

function updateUsuarioInfo(usuarioInfo) {
    var result;
    console.log('update UsuarioInfo by ' + usuarioInfo._id);
    try {
        result = await (UsuarioInfosRsrc.updateUsuarioInfo(usuarioInfo));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { usuarioInfo: result };
}

function deleteUsuarioInfo(id) {
    var result;
    console.log('delete UsuarioInfo by ' + id);
    try {
        result = await (UsuarioInfosRsrc.deleteUsuarioInfo(id));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { usuarioInfo: result };
}

function postUsuarioInfo(usuarioInfo) {
    var result;
    console.log('post UsuarioInfo service',usuarioInfo);
    try {
        result = await (UsuarioInfosRsrc.addUsuarioInfo(usuarioInfo));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { usuarioInfo: result };
}

module.exports.getUsuarioInfo = async(getUsuarioInfo);
module.exports.updateUsuarioInfo = async(updateUsuarioInfo);
module.exports.deleteUsuarioInfo = async(deleteUsuarioInfo);
module.exports.postUsuarioInfo = async(postUsuarioInfo);