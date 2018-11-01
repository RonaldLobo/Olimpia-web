var async = require('asyncawait/async');
var await = require('asyncawait/await');
var pool = require(__base + 'server/configuration').mysql;

function getUsuarioInfos() {
    var usuarioInfos = await(pool.query('SELECT * FROM UsuarioInfo'));
    return usuarioInfos;
}

function getUsuarioInfo(id) {
    var usuarioInfo = await(pool.query('SELECT * FROM UsuarioInfo WHERE pkIdUsuarioInfo='+id));
    return usuarioInfo;
}

function deleteUsuarioInfo(id) {
    var usuarioInfo = await(pool.query('DELETE FROM UsuarioInfo WHERE pkIdUsuarioInfo='+id));
    return usuarioInfo;
}

function updateUsuarioInfo(usuarioInfoParam) {
    var usuarioInfo = await(pool.query('UPDATE UsuarioInfo SET fechaNacimiento = ?, altura = ?, peso = ?, porcentajeGrasa = ?, porcentajeMasaMagra = ?, brazo = ?, pierna = ?, pantorrilla = ?, cintura = ?, gluteos = ?, pecho = ?, espalda = ?, fkIdUsuarioInfo = ?, estado = ? WHERE pkIdUsuarioInfo = ?', 
        [
            usuarioInfoParam.fechaNacimiento,
            usuarioInfoParam.altura,
            usuarioInfoParam.peso,
            usuarioInfoParam.porcentajeGrasa,
            usuarioInfoParam.porcentajeMasaMagra,
            usuarioInfoParam.brazo,
            usuarioInfoParam.pierna,
            usuarioInfoParam.pantorrilla,
            usuarioInfoParam.cintura,
            usuarioInfoParam.gluteos,
            usuarioInfoParam.pecho,
            usuarioInfoParam.espalda,
            usuarioInfoParam.fkIdUsuarioInfo,
            usuarioInfoParam.estado, 
            usuarioInfoParam.pkIdUsuarioInfo
        ]
        ));
    return usuarioInfo;
}

function addUsuarioInfo(usuarioInfoParam) {
    var usuarioInfo = await(pool.query('INSERT INTO UsuarioInfo SET ?', usuarioInfoParam));
    return usuarioInfo;
}

module.exports = {
    getUsuarioInfos: async(getUsuarioInfos),
    getUsuarioInfo: async(getUsuarioInfo),
    deleteUsuarioInfo: async(deleteUsuarioInfo),
    updateUsuarioInfo: async(updateUsuarioInfo),
    addUsuarioInfo: async(addUsuarioInfo)
};