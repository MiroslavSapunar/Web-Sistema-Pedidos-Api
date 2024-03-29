const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
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
    usertype: {
        type: String,
        required: true,
    },
    recepciones: {
        type: Array,
        required: true,
    },
    impresiones: {
        type: Array,
        required: true,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;