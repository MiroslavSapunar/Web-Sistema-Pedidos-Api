const router = require('express').Router();
let Count = require('../models/count.model');

router.route('/').get((req, res) => {
    Count.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Count.findById(req.params.id)
        .then(work => res.json(work))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const nombre = req.body.nombre;
    const cuenta = Number(req.body.cuenta);

    var newCount = new Count({
        nombre,
        cuenta,
    });

    newCount.save(function(err,obj) {
        if(err){
            console.log(err)
            res.json(err)
        }
        res.json(obj.id)
     });
});

router.route('/update/:id').post((req, res) => {
    
    var id = req.params.id;
    var update = req.body;
    console.log(id);
    console.log(update);
    
    Count.findByIdAndUpdate(id, update)
        .then(() => 
            res.json('Count update!')
        )
        .catch(err => 
            res.status(400).json('Error: ' + err)
        );
})

module.exports = router;