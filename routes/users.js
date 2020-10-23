const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const usertype = req.body.usertype;
    const recepciones = req.body.recepciones;
    const trabajos = req.body.trabajos;
    const pedidos = req.body.pedidos;

    var newUser = new User({
        username,
        email,
        password,
        usertype,
        recepciones,
        trabajos,
        pedidos
    });

    /**
     *
    newUser.save(function(err,obj) {
        if(err){
            console.log(err)
            res.json(err)
        }
        if(obj){
            res.json(obj.id)
        }
     });
     */

    newUser.save()
    .then(console.log(res))
    .catch(
        err => {
            console.log(err)
            res.status(400).json(err)
        }
    );
    
    /**
     * 
     .then(() => res.json('¡Usuario agregado!'))
     .catch( err => res.status(400).json('Error: ' + err));
   */
});

module.exports = router;