const Empleado = require('../models/empleado.model');
const empleadoCtrl = {};

// dar de alta un empleado
empleadoCtrl.createEmpleado = async (req, res) => {
    try {
        await Empleado.create(req.body);
        res.json({ status: '1', msg: 'Empleado creado correctamente' });
    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error al crear el empleado' });
    }
}
//obtener todos los empleados
empleadoCtrl.getEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.findAll();
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener los empleados' });
    }
}
// obtener un empleado por id
empleadoCtrl.getEmpleado = async (req, res) => {
    try {
        const empleado = await Empleado.findByPk(req.params.id);
        if (empleado != null) {
            res.json(empleado);
        } else {
            return res.status(404).json({ status: '0', msg: 'Empleado no encontrado' })
        }
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener el empleado' });
    }
}
module.exports = empleadoCtrl;