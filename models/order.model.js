const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    numeroPedido: {
        type: String,
        required: true,
        unique: true
    },
    id_reception: {
        type: String,
        required: true,
        trim: true,
    },
    id_contact: {
        type: String,
        required: true,
        trim: true,
    },
    id_works: {
        type: Array,
        required: true,
    },
    estado:{        
        type: String,
        required: true,
        trim: true,
    },
    observacion:{        
        type: String,
        trim: true,
    },
    totalPedido: {
        type: String,
        required: true,
    },
    costoEnvio: {
        type: String,
        required: true,
    },
    costoEnvio: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;