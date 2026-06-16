const publicacionCtrl = require('../controllers/publicacion.controller');

const express = require('express');
const router = express.Router();

router.post('/', publicacionCtrl.createPublicacion);
router.get('/', publicacionCtrl.getPublicaciones);
router.put('/:id', publicacionCtrl.editPublicacion);
router.delete('/:id', publicacionCtrl.deletePublicacion);
router.get('/busqueda', publicacionCtrl.getPublicacionesBusqueda);
module.exports = router;