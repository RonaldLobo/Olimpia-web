var async = require('asyncawait/async');
var await = require('asyncawait/await');
var pool = require(__base + 'server/configuration').mysql;

function getGimnasios() {
    var gimnasios = await(pool.query('SELECT * FROM Gimnasio'));
    return gimnasios;
}

function getGimnasio(id) {
    var gimnasio = await(pool.query('SELECT * FROM Gimnasio WHERE pkIdGimnasio='+id));
    return gimnasio;
}

function deleteGimnasio(id) {
    var gimnasio = await(pool.query('DELETE FROM Gimnasio WHERE pkIdGimnasio='+id));
    return gimnasio;
}

function updateGimnasio(gimnasioParam) {
    var gimnasio = await(pool.query('UPDATE Gimnasio SET nombre = ?, direccion = ?, fbId = ?, telefono = ? , correo = ?, estado = ? WHERE pkIdGimnasio = ?', 
        [
            gimnasioParam.nombre, 
            gimnasioParam.direccion, 
            gimnasioParam.fbId, 
            gimnasioParam.telefono, 
            gimnasioParam.correo, 
            gimnasioParam.estado, 
            gimnasioParam.pkIdGimnasio
        ]
        ));
    return gimnasio;
}

function addGimnasio(gimnasioParam) {
    var gimnasio = await(pool.query('INSERT INTO Gimnasio SET ?', gimnasioParam));
    return gimnasio;
}

module.exports = {
    getGimnasios: async(getGimnasios),
    getGimnasio: async(getGimnasio),
    deleteGimnasio: async(deleteGimnasio),
    updateGimnasio: async(updateGimnasio),
    addGimnasio: async(addGimnasio)
};