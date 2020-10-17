const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workSchema = new Schema({
    id_pedido: {
        type: String,
        required: true
    },
    numeroPedido: {
        type: String,
        required: true
    },
    numeroTrabajo: {
        type: String,
        required: true
    },
    tamanioPapel: {
        type: String,
        required: true
    },
    linkDrive: {
        type: String,
        required: true,
        trim: true,
    },
    faz: {
        type: String,
        required: true,
        trim: true,
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
    costoImpresion: {
        type: Number,
        required: true,
        trim: true,
    },
    costoTerminacion: {
        type: Number,
        required: true,
        trim: true,
    },
    costoTotal: {
        type: Number,
        required: true,
        trim: true,
    },

});

const Work = mongoose.model('Work', workSchema);

module.exports = Work;