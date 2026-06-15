const socioCtrl = require('../controllers/socio.controller');
const express=require('express');
const router=express.Router();

router.post('/',socioCtrl.createSocio);
router.get('/',socioCtrl.getSocios);
router.put('/:id',socioCtrl.editSocio);
router.delete('/:id',socioCtrl.deleteSocio);
router.get('/activo',socioCtrl.getSociosActivos);
module.exports=router;