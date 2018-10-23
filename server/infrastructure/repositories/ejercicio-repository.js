var async = require('asyncawait/async');
var await = require('asyncawait/await');
var pool = require(__base + 'server/configuration').mysql;

function getEjercicios() {
    var ejercicios = await(pool.query('SELECT * FROM Ejercicio'));
    return ejercicios;
}

function getEjercicio(id) {
    var ejercicio = await(pool.query('SELECT * FROM Ejercicio WHERE pkIdEjercicio='+id));
    return ejercicio;
}

function deleteEjercicio(id) {
    var ejercicio = await(pool.query('DELETE FROM Ejercicio WHERE pkIdEjercicio='+id));
    return ejercicio;
}

function updateEjercicio(ejercicioParam) {
    var ejercicio = await(pool.query('UPDATE Ejercicio SET nombre = ?, ejemplo = ?, descripcion = ? WHERE pkIdEjercicio = ?', 
        [
            ejercicioParam.nombre, 
            ejercicioParam.ejemplo, 
            ejercicioParam.descripcion, 
            ejercicioParam.pkIdEjercicio
        ]
        ));
    return ejercicio;
}

function addEjercicio(ejercicioParam) {
    var ejercicio = await(pool.query('INSERT INTO Ejercicio SET ?', ejercicioParam));
    return ejercicio;
}

module.exports = {
    getEjercicios: async(getEjercicios),
    getEjercicio: async(getEjercicio),
    deleteEjercicio: async(deleteEjercicio),
    updateEjercicio: async(updateEjercicio),
    addEjercicio: async(addEjercicio)
};