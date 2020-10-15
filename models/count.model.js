const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const countSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    cuenta: {
        type: Number,
        required: true,
    }

});

const Count = mongoose.model('Count', countSchema);

module.exports = Count;