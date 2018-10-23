var async = require('asyncawait/async');
var await = require('asyncawait/await');
var usuarioInfoModel = require(__base + 'server/model/usuarioInfo');

function getUsuarioInfos() {
    var usuarioInfos = await(usuarioInfoModel.find({}));
    return usuarioInfos;
}

function getUsuarioInfo(id) {
    var usuarioInfo = await(usuarioInfoModel.findOne({_id:id}));
    return usuarioInfo;
}

function deleteUsuarioInfo(id) {
    var usuarioInfo = await(usuarioInfoModel.remove({_id:id}));
    return usuarioInfo;
}

function updateUsuarioInfo(usuarioInfoParam) {
    var usuarioInfo = await(usuarioInfoModel.update({_id:usuarioInfoParam._id},usuarioInfoParam));
    return usuarioInfo;
}

function addUsuarioInfo(usuarioInfoParam) {
    var usuarioInfo = await(usuarioInfoModel.create(usuarioInfoParam));
    return usuarioInfo;
}

module.exports = {
    getUsuarioInfos: async(getUsuarioInfos),
    getUsuarioInfo: async(getUsuarioInfo),
    deleteUsuarioInfo: async(deleteUsuarioInfo),
    updateUsuarioInfo: async(updateUsuarioInfo),
    addUsuarioInfo: async(addUsuarioInfo)
};