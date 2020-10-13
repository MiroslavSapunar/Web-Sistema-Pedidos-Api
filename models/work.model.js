const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workSchema = new Schema({
    numeroTrabajo: {
        type: String,
        required: true
    },
    linkDrive: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    faz: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },

    paginasPDF: {
        type: String,
        required: true,
    },

    paginasCarilla: {
        type: String,
        required: true,
    },
    margen: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    terminacion: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    id_worker: {
        type: String,
        required: true,
        trim: true,
    },
    estado: {
        type: String,
        required: true,
        trim: true,
    },

});

const Work = mongoose.model('Work', workSchema);

module.exports = Work;