var async = require('asyncawait/async');
var await = require('asyncawait/await');
var pool = require(__base + 'server/configuration').mysql;

function getUsuarioGimnasios() {
    var usuarioGimnasios = await(pool.query('SELECT * FROM UsuarioGimnasio'));
    return usuarioGimnasios;
}

function getUsuarioGimnasio(id) {
    var usuarioGimnasio = await(pool.query('SELECT * FROM UsuarioGimnasio WHERE pkIdUsuarioGimnasio='+id));
    return usuarioGimnasio;
}

function deleteUsuarioGimnasio(id) {
    var usuarioGimnasio = await(pool.query('DELETE FROM UsuarioGimnasio WHERE pkIdUsuarioGimnasio='+id));
    return usuarioGimnasio;
}

function updateUsuarioGimnasio(usuarioGimnasioParam) {
    var usuarioGimnasio = await(pool.query('UPDATE UsuarioGimnasio SET fkIdUsuario = ?, fkIdGimnasio = ?, fechaIngreso = ?, estado = ? WHERE pkIdUsuarioGimnasio = ?', 
        [
            usuarioGimnasioParam.fkIdUsuario,
            usuarioGimnasioParam.fkIdGimnasio,
            usuarioGimnasioParam.fechaIngreso,
            usuarioGimnasioParam.estado, 
            usuarioGimnasioParam.pkIdUsuarioGimnasio
        ]
        ));
    return usuarioGimnasio;
}

function addUsuarioGimnasio(usuarioGimnasioParam) {
    var usuarioGimnasio = await(pool.query('INSERT INTO UsuarioGimnasio SET ?', usuarioGimnasioParam));
    return usuarioGimnasio;
}

module.exports = {
    getUsuarioGimnasios: async(getUsuarioGimnasios),
    getUsuarioGimnasio: async(getUsuarioGimnasio),
    deleteUsuarioGimnasio: async(deleteUsuarioGimnasio),
    updateUsuarioGimnasio: async(updateUsuarioGimnasio),
    addUsuarioGimnasio: async(addUsuarioGimnasio)
};