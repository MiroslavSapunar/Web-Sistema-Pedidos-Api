const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    telefono: {
        type: String,
        required: true,
        trim: true,
    },
    direccion: {
        type: String,
        required: true,
        trim: true,
    },
    timbre: {
        type: String,
        required: true,
        trim: true,
    },
    dni: {
        type: String,
        required: true,
        trim: true,
    },
    id_pedido: {
        type: String,
        required: true,
        trim: true,
    },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;