const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    contacto: {
        type: String,
        required: true,
    },
    pedidos: {
        type: Array,
        required: true,
    }
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;