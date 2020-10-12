const router = require('express').Router();
let Work = require('../models/work.model');

router.route('/').get((req, res) => {
    Work.find()
        .then(works => res.json(works))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const linkDrive = req.body.linkDrive;
    const faz = req.body.faz;
    const paginasPDF = req.body.paginasPDF;
    const paginasCarilla = req.body.paginasCarilla;
    const margen = req.body.margen;
    const terminacion = req.body.terminacion;

    const newWork = new Work({
        linkDrive,
        faz,
        paginasPDF,
        paginasCarilla,
        margen,
        terminacion,
    });

    newWork.save(function(err,obj) {
        if(err){
            res.json(err)
        }
        if(obj){
            res.json(obj.id)
        }
     });

    /**
     * 
     newWork.save()
     .then(() => res.json('Work added!'))
     .catch(err => res.status(400).json('Error: ' + err));
    */
});

router.route('/:id').get((req, res) => {
    Work.findById(req.params.id)
        .then(work => res.json(work))
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