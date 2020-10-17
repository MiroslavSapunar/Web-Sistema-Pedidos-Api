const router = require('express').Router();
let Contact = require('../models/contact.model');

router.route('/').get((req, res) => {
    Contact.find()
        .then(contacts => res.json(contacts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    const telefono = req.body.telefono;
    const direccion = req.body.direccion;
    const timbre = req.body.timbre;
    const dni = req.body.dni;
    const id_pedido = req.body.id_pedido;

    const newContact = new Contact({
        nombre,
        email,
        telefono,
        direccion,
        timbre,
        dni,
        id_pedido,
    });

    newContact.save(function(err,obj) {
        if(err){
            console.log(err)
            res.json(err)
        }
        if(obj){
            res.json(obj.id)
        }
     });

    /**
     * 
     newContact.save()
     .then(() => res.json('Contact added!'))
     .catch(err => res.status(400).json('Error: ' + err));
    */
});

router.route('/:id').get((req, res) => {
    Contact.findById(req.params.id)
        .then(contact => res.json(contact))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
    
    var id = req.params.id;
    var update = req.body;
    //console.log(id);
    //console.log(update);
    
    Contact.findByIdAndUpdate(id, update)
        .then(() => 
            res.json('Contact update!')
        )
        .catch(err => 
            res.status(400).json('Error: ' + err)
        );
})

/**
router.route('/:id').delete((req, res) => {
    Contact.findByIdAndDelete(req.params.id)
        .then(() => res.json('Contact deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
 * 

    
*/
module.exports = router;