var async = require('asyncawait/async');
var await = require('asyncawait/await');
var usuarioModel = require(__base + 'server/model/usuario');

function getUsuarios() {
    var usuarios = await(usuarioModel.find({}));
    return usuarios;
}

function getUsuario(id) {
    var usuario = await(usuarioModel.findOne({_id:id}));
    return usuario;
}

function deleteUsuario(id) {
    var usuario = await(usuarioModel.remove({_id:id}));
    return usuario;
}

function updateUsuario(usuarioParam) {
    var usuario = await(usuarioModel.update({_id:usuarioParam._id},usuarioParam));
    return usuario;
}

function addUsuario(usuarioParam) {
    var usuario = await(usuarioModel.create(usuarioParam));
    return usuario;
}

module.exports = {
    getUsuarios: async(getUsuarios),
    getUsuario: async(getUsuario),
    deleteUsuario: async(deleteUsuario),
    updateUsuario: async(updateUsuario),
    addUsuario: async(addUsuario)
};