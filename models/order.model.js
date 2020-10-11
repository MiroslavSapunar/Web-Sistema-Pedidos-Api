const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    id_contact: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    id_work: {
        type: Array,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    id_reception: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    id_worker: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    estado:{        
        type: String,
        required: true,
        trim: true,
        minlength: 3
    }

});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;