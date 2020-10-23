const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    contact: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    usertype: {
        type: String,
        required: true,
    },
    recepciones: {
        type: Number,
        required: true,
    },
    trabajos: {
        type: Number,
        required: true,
    },
    pedidos: {
        type: Number,
        required: true,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;