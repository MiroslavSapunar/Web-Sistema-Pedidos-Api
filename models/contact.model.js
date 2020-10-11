const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    telefono: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    direccion: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    dni: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;