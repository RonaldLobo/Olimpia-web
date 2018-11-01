var async = require('asyncawait/async');
var await = require('asyncawait/await');
var pool = require(__base + 'server/configuration').mysql;

function getRutinaEjercicios() {
    var rutinaEjercicios = await(pool.query('SELECT * FROM RutinaEjercicio'));
    return rutinaEjercicios;
}

function getRutinaEjercicio(id) {
    var rutinaEjercicio = await(pool.query('SELECT * FROM RutinaEjercicio WHERE pkIdRutinaEjercicio='+id));
    return rutinaEjercicio;
}

function deleteRutinaEjercicio(id) {
    var rutinaEjercicio = await(pool.query('DELETE FROM RutinaEjercicio WHERE pkIdRutinaEjercicio='+id));
    return rutinaEjercicio;
}

function updateRutinaEjercicio(rutinaEjercicioParam) {
    var rutinaEjercicio = await(pool.query('UPDATE RutinaEjercicio SET fkIdRutinaEjercicio = ?, estado = ? WHERE pkIdRutinaEjercicio = ?', 
        [
            rutinaEjercicioParam.fkIdRutinaEjercicio,
            rutinaEjercicioParam.estado, 
            rutinaEjercicioParam.pkIdRutinaEjercicio
        ]
        ));
    return rutinaEjercicio;
}

function addRutinaEjercicio(rutinaEjercicioParam) {
    var rutinaEjercicio = await(pool.query('INSERT INTO RutinaEjercicio SET ?', rutinaEjercicioParam));
    return rutinaEjercicio;
}

module.exports = {
    getRutinaEjercicios: async(getRutinaEjercicios),
    getRutinaEjercicio: async(getRutinaEjercicio),
    deleteRutinaEjercicio: async(deleteRutinaEjercicio),
    updateRutinaEjercicio: async(updateRutinaEjercicio),
    addRutinaEjercicio: async(addRutinaEjercicio)
};