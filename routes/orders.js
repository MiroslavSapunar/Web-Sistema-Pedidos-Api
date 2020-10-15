const router = require('express').Router();
let Order = require('../models/order.model');

router.route('/').get((req, res) => {
    Order.find()
        .then(orders => res.json(orders))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const id_contact = req.body.id_contact;
    const id_work = req.body.id_work;
    const total = req.body.total;
    const id_reception = req.body.id_reception;
    const numeroPedido = req.body.numeroPedido;
    const estado = req.body.estado;

    const newOrder = new Order({
        id_contact,
        id_work,
        total,
        id_reception,
        numeroPedido,
        estado,
    });

    newOrder.save(function(err,obj) {
        if(err){
            res.json(err)
        }
        if(obj){
            res.json(obj.id)
        }
    });

});

router.route('/:id').get((req, res) => {
    Order.findById(req.params.id)
        .then(order => res.json(order))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req, res) => {
    Order.findByIdAndDelete(req.params.id)
        .then(() => res.json('Order deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Order.findById(req.params.id)
    .then(order => {
        order.nombre = req.body.nombre;
        order.email = req.body.email;
        order.telefono = req.body.telefono;
        order.direccion = req.body.direccion;
        order.dni = req.body.dni;
        
        order.save()
        .then(() => res.json('Order updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;