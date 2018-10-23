var async = require('asyncawait/async');
var await = require('asyncawait/await');
var pool = require(__base + 'server/configuration').mysql;

function getRutinas() {
    var rutinas = await(pool.query('SELECT * FROM Rutina'));
    return rutinas;
}

function getRutina(id) {
    var rutina = await(pool.query('SELECT * FROM Rutina WHERE pkIdRutina='+id));
    return rutina;
}

function deleteRutina(id) {
    var rutina = await(pool.query('DELETE FROM Rutina WHERE pkIdRutina='+id));
    return rutina;
}

function updateRutina(rutinaParam) {
    var rutina = await(pool.query('UPDATE Rutina SET fkIdUsuarioRutina = ?, fkIdGimnasioRutina = ?, fbId = ?, telefono = ? , correo = ?, estado = ? WHERE pkIdRutina = ?', 
        [
            rutinaParam.nombre, 
            rutinaParam.direccion, 
            rutinaParam.fbId, 
            rutinaParam.telefono, 
            rutinaParam.correo, 
            rutinaParam.estado, 
            rutinaParam.pkIdRutina
        ]
        ));
    return rutina;
}

function addRutina(rutinaParam) {
    var rutina = await(pool.query('INSERT INTO Rutina SET ?', rutinaParam));
    return rutina;
}

module.exports = {
    getRutinas: async(getRutinas),
    getRutina: async(getRutina),
    deleteRutina: async(deleteRutina),
    updateRutina: async(updateRutina),
    addRutina: async(addRutina)
};