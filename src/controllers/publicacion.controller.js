const Publicacion = require('../models/publicacion.model');
const Empleado = require('../models/empleado.model');
const { Op } = require('sequelize'); // para búsqueda combinada  usando op.like
const publicacionCtrl = {};
//dar de alta una publicacion segun empleado
publicacionCtrl.createPublicacion = async (req, res) => {
    try {
        const data = req.body;
        const empleado = await Empleado.findByPk(req.body.idEmpleado, {
        });
        if (empleado != null) {
            data.idEmpleado = empleado.id;
            const publicacion = await Publicacion.create(data);
            res.json({ status: '1', msg: 'Publicacion creada correctamente' });
        } else {
            res.status(404).json({ status: '0', msg: 'Empleado no encontrado' });

        }
    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error al crear la publicacion' });
    }
};
//recuperar todas las publicaciones incluyendo informacion del empleado
publicacionCtrl.getPublicaciones = async (req, res) => {
    try {
        const publicaciones = await Publicacion.findAll({
            include: [
                {
                    model: Empleado,
                    as: 'empleado'
                }
            ]
        });
        res.json(publicaciones);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener las publicaciones' });
    }
};
//modificar publicacion
publicacionCtrl.editPublicacion = async (req, res) => {
    try {
        await Publicacion.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({ status: '1', msg: 'Publicacion modificada correctamente' });

    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error al modificar la publicacion' });
        console.log(error);
    }
}
//eliminar publicacion
publicacionCtrl.deletePublicacion = async (req, res) => {
    try {
        await Publicacion.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({ status: '1', msg: 'Publicacion eliminada correctamente' });
    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error al eliminar la publicacion' });
    }
}
// para búsqueda combinada  usando op.like
publicacionCtrl.getPublicacionesBusqueda = async (req, res) => {
    try {
        if (req.query.vigente == 'true') {
            req.query.vigente = true;
        } else if (req.query.vigente == 'false') {
            req.query.vigente = false;
        }
        const publicaciones = await Publicacion.findAll({
            include: [
                {
                    model: Empleado,
                    as: 'empleado'
                }
            ],
            where: {
                [Op.and]: [
                    {
                        titulo: { [Op.like]: `%${req.query.titulo}%` }
                    },
                    {
                        vigente: req.query.vigente
                    }
                ],
            }
        })
        res.json(publicaciones);
    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error al obtener las publicaciones' })
    }
}

module.exports = publicacionCtrl;