var async = require('asyncawait/async');
var await = require('asyncawait/await');
var usuarioGimnasioModel = require(__base + 'server/model/usuarioGimnasio');

function getUsuarioGimnasios() {
    var usuarioGimnasios = await(usuarioGimnasioModel.find({}));
    return usuarioGimnasios;
}

function getUsuarioGimnasio(id) {
    var usuarioGimnasio = await(usuarioGimnasioModel.findOne({_id:id}));
    return usuarioGimnasio;
}

function deleteUsuarioGimnasio(id) {
    var usuarioGimnasio = await(usuarioGimnasioModel.remove({_id:id}));
    return usuarioGimnasio;
}

function updateUsuarioGimnasio(usuarioGimnasioParam) {
    var usuarioGimnasio = await(usuarioGimnasioModel.update({_id:usuarioGimnasioParam._id},usuarioGimnasioParam));
    return usuarioGimnasio;
}

function addUsuarioGimnasio(usuarioGimnasioParam) {
    var usuarioGimnasio = await(usuarioGimnasioModel.create(usuarioGimnasioParam));
    return usuarioGimnasio;
}

module.exports = {
    getUsuarioGimnasios: async(getUsuarioGimnasios),
    getUsuarioGimnasio: async(getUsuarioGimnasio),
    deleteUsuarioGimnasio: async(deleteUsuarioGimnasio),
    updateUsuarioGimnasio: async(updateUsuarioGimnasio),
    addUsuarioGimnasio: async(addUsuarioGimnasio)
};