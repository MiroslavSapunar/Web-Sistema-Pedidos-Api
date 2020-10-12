const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    id_contact: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    id_works: {
        type: String,
        required: true,
    },
    total: {
        type: String,
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
    numeroPedido: {
        type: String,
        required: true,
        trim: true,
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