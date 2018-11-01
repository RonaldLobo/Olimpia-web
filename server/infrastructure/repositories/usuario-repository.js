var async = require('asyncawait/async');
var await = require('asyncawait/await');
var pool = require(__base + 'server/configuration').mysql;

function getUsuarios() {
    var usuarios = await(pool.query('SELECT * FROM Usuario'));
    return usuarios;
}

function getUsuario(id) {
    var usuario = await(pool.query('SELECT * FROM Usuario WHERE pkIdUsuario='+id));
    return usuario;
}

function deleteUsuario(id) {
    var usuario = await(pool.query('DELETE FROM Usuario WHERE pkIdUsuario='+id));
    return usuario;
}

function updateUsuario(usuarioParam) {
    var usuario = await(pool.query('UPDATE Usuario SET nombre = ?, apellido1 = ?, apellido2 = ?, correo = ?, telefono = ?, fbId = ?, contrasenna = ?, rol = ?, estado = ? WHERE pkIdUsuario = ?', 
        [
            usuarioParam.nombre,
            usuarioParam.apellido1,
            usuarioParam.apellido2,
            usuarioParam.correo,
            usuarioParam.telefono,
            usuarioParam.fbId,
            usuarioParam.contrasenna,
            usuarioParam.rol,
            usuarioParam.estado, 
            usuarioParam.pkIdUsuario
        ]
        ));
    return usuario;
}

function addUsuario(usuarioParam) {
    var usuario = await(pool.query('INSERT INTO Usuario SET ?', usuarioParam));
    return usuario;
}

module.exports = {
    getUsuarios: async(getUsuarios),
    getUsuario: async(getUsuario),
    deleteUsuario: async(deleteUsuario),
    updateUsuario: async(updateUsuario),
    addUsuario: async(addUsuario)
};