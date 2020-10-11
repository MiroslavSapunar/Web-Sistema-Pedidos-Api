const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workSchema = new Schema({
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
    paginasCarilla: {
        type: Number,
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
});

const Work = mongoose.model('Work', workSchema);

module.exports = Work;