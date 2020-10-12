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
    const id_worker = req.body.id_worker;
    const numeroPedido = req.body.numeroPedido;
    const estado = req.body.estado;

    const newOrder = new Order({
        id_contact,
        id_work,
        total,
        id_reception,
        id_worker,
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

    /**
     * 
     newOrder.save()
     .then(() => res.json('Order added!'))
     .catch(err => res.status(400).json('Error: ' + err));
    */
});

router.route('/:id').get((req, res) => {
    Order.findById(req.params.id)
        .then(order => res.json(order))
        .catch(err => res.status(400).json('Error: ' + err));
})

/**
router.route('/:id').delete((req, res) => {
    Contact.findByIdAndDelete(req.params.id)
        .then(() => res.json('Contact deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
 * 
 router.route('/update/:id').post((req, res) => {
     Contact.findById(req.params.id)
     .then(contact => {
         contact.nombre = req.body.nombre;
         contact.email = req.body.email;
         contact.telefono = req.body.telefono;
         contact.direccion = req.body.direccion;
         contact.dni = req.body.dni;
         
         contact.save()
         .then(() => res.json('Contact updated!'))
         .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
    });
    
*/
module.exports = router;