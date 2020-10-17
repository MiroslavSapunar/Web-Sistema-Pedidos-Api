const router = require('express').Router();
let Order = require('../models/order.model');

router.route('/').get((req, res) => {
    Order.find()
        .then(orders => res.json(orders))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const numeroPedido = req.body.numeroPedido;
    const id_reception = req.body.id_reception;
    const id_contact = req.body.id_contact;
    const id_works = req.body.id_works;
    const estado = req.body.estado;
    const observacion = req.body.observacion;
    const totalPedido = req.body.totalPedido;
    const costoEnvio = req.body.costoEnvio;

    const newOrder = new Order({
        numeroPedido,
        id_reception,
        id_contact,
        id_works,
        estado,
        observacion,
        totalPedido,
        costoEnvio
    });

    newOrder.save(function(err,obj) {
        if(err){
            console.log(err)
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
    
    var id = req.params.id;
    var update = req.body;
    //console.log(id);
    //console.log(update);
    
    Order.findByIdAndUpdate(id, update)
        .then(() => 
            res.json('Work update!')
        )
        .catch(err => 
            res.status(400).json('Error: ' + err)
        );

})

module.exports = router;