const router = require('express').Router();
let User = require('../models/user.model');
const jwt = require('jsonwebtoken');


const auth = require('../middleware/auth');


router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('No se encontro el usuario'));
})

router.route('/login').post((req, res) => {
    User.findOne(req.body)
        .then(user => {
            if (user) {
                
                const signinUser = {
                    id: user._id,
                    username: user.username,
                    password: user.password,
                    usertype: user.usertype
                };

                const token = jwt.sign(signinUser, process.env.LOGIN_TOKEN_SECRET);
                res.json(token);

            } else {
                res.status(401).json({ msg: 'No se encontro el usuario' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({ msg: err.message });
        });
})

router.route("/delete").delete(auth, (req, res) => {
    User.findByIdAndDelete(res.user)
        .then(() => res.json('Contact deleted!'))
        .catch(err => {
            console.log(err);
            res.status(400).json({ msg: err.message });
        });
});

router.route('/add').post((req, res) => {

    User.findOne({ username: req.body.username })
        .then(user => {
            if (user) {
                res.status(401).json("Usuario ya registrado");
            } else {
                User.findOne({ email: req.body.email })
                    .then(user => {
                        if (user) {
                            res.status(403).json("Email ya registrado");
                        } else {

                            const newUser = new User({
                                username: req.body.username,
                                email: req.body.email,
                                password: req.body.password,
                                contact: req.body.contact,
                                usertype: req.body.usertype,
                                recepciones: req.body.recepciones,
                                trabajos: req.body.trabajos,
                                pedidos: req.body.pedidos,
                            });

                            newUser.save()
                                .then(() => res.json('User added!'))
                                .catch(err => {
                                    console.log(err)
                                    res.status(400).json({ msg: err.message });
                                });
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(400).json({ msg: err.message });
                    })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({ msg: err.message });
        })
});

module.exports = router;