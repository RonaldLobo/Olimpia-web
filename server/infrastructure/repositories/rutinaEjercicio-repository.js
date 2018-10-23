var async = require('asyncawait/async');
var await = require('asyncawait/await');
var rutinaEjercicioModel = require(__base + 'server/model/rutinaEjercicio');

function getRutinaEjercicios() {
    var rutinaEjercicios = await(rutinaEjercicioModel.find({}));
    return rutinaEjercicios;
}

function getRutinaEjercicio(id) {
    var rutinaEjercicio = await(rutinaEjercicioModel.findOne({_id:id}));
    return rutinaEjercicio;
}

function deleteRutinaEjercicio(id) {
    var rutinaEjercicio = await(rutinaEjercicioModel.remove({_id:id}));
    return rutinaEjercicio;
}

function updateRutinaEjercicio(rutinaEjercicioParam) {
    var rutinaEjercicio = await(rutinaEjercicioModel.update({_id:rutinaEjercicioParam._id},rutinaEjercicioParam));
    return rutinaEjercicio;
}

function addRutinaEjercicio(rutinaEjercicioParam) {
    var rutinaEjercicio = await(rutinaEjercicioModel.create(rutinaEjercicioParam));
    return rutinaEjercicio;
}

module.exports = {
    getRutinaEjercicios: async(getRutinaEjercicios),
    getRutinaEjercicio: async(getRutinaEjercicio),
    deleteRutinaEjercicio: async(deleteRutinaEjercicio),
    updateRutinaEjercicio: async(updateRutinaEjercicio),
    addRutinaEjercicio: async(addRutinaEjercicio)
};