const router = require('express').Router();
let User = require('../models/user.model');


router.route('/:id').get((req, res) => {
    //console.log(req.params.id);
    const user = {
        username: req.params.id
    }
    User.find(user)
        .then(user => {
            //console.log(user[0].password);
            if(user.length > 0){
                res.json(user[0].password)
            }else{
                res.json()
            }
        })
        .catch(err => {
            console.log(err);
            res.status(400).json('Error: ' + err)
        });
})

module.exports = router;