const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const type = req.body.type;
    const online = req.body.online;

    var newUser = new User({
        username,
        password,
        type,
        online,
    });

    newUser.save(function(err,obj) {
        if(err){
            res.json(err)
        }
        res.json(obj.id)
     });

    /**
     * 
     .then(() => res.json('¡Usuario agregado!'))
     .catch( err => res.status(400).json('Error: ' + err));
   */
});

module.exports = router;