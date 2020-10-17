const router = require('express').Router();
let Work = require('../models/work.model');

router.route('/').get((req, res) => {
    Work.find()
        .then(works => res.json(works))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const id_pedido = req.body.id_pedido;
    const numeroPedido = req.body.numeroPedido;
    const numeroTrabajo = req.body.numeroTrabajo;
    const tamanioPapel = req.body.tamanioPapel;
    const linkDrive = req.body.linkDrive;
    const faz = req.body.faz;
    const paginasPDF = req.body.paginasPDF;
    const paginasCarilla = req.body.paginasCarilla;
    const margen = req.body.margen;
    const terminacion = req.body.terminacion;
    const id_worker= req.body.id_worker;
    const estado= req.body.estado;
    const costoImpresion= Number(req.body.costoImpresion);
    const costoTerminacion= Number(req.body.costoTerminacion);
    const costoTotal= Number(req.body.costoTotal);   
    

    const newWork = new Work({
        id_pedido,
        numeroPedido,
        numeroTrabajo,
        tamanioPapel,
        linkDrive,
        faz,
        paginasPDF,
        paginasCarilla,
        margen,
        terminacion,
        id_worker,
        estado,
        costoImpresion,
        costoTerminacion,
        costoTotal,
    });

    newWork.save(function(err,obj) {
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


router.route('/:id').delete((req, res) => {
    Work.findByIdAndDelete(req.params.id)
        .then(() => res.json('Work deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    
    var id = req.params.id;
    var update = req.body;
    //console.log(id);
    //console.log(update);
    
    Work.findByIdAndUpdate(id, update)
        .then(() => 
            res.json('Work update!')
        )
        .catch(err => 
            res.status(400).json('Error: ' + err)
        );

})
    
module.exports = router;