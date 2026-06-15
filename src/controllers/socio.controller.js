const Socio = require('../models/socio.model');
const socioCtrl = {};

//dar de alta a un socio
socioCtrl.createSocio = async (req, res) => {
    try {
        await Socio.create(req.body);
        res.json({ status: '1', msg: 'Socio creado correctamente' });

    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error al crear el socio' })
        console.log(error);
    }
};
//obtener todos los sicios
socioCtrl.getSocios = async (req, res) => {
    try {
        const socios = await Socio.findAll();
        res.json(socios);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener los socios' });
    }
};

// modificar un socio
socioCtrl.editSocio = async (req, res) => {
    try {
        await Socio.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({ status: '1', msg: 'Socio modificado correctamente' });
    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error al modificar el socio' });
    }
}
// eliminar un socio
socioCtrl.deleteSocio = async (req, res) => {
    try {
        await Socio.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({ status: '1', msg: 'Socio eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error al eliminar el socio' });
    }
}
// recuperar socios activos
socioCtrl.getSociosActivos = async (req, res) => {
    try {
        const socios = await Socio.findAll({
            where: {
                activo: true
            }
        });
        res.status(200).json(socios);
    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error al obtener los socios activos' });
    }


}
module.exports = socioCtrl;