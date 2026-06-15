const Transaccion = require('../models/transaccion.model');
const transaccionCtrl = {};

//dar de alta una transaccion
transaccionCtrl.createTransaccion = async (req, res) => {
    try {
        await Transaccion.create(req.body);
        res.json({ status: '1', msg: 'Transaccion creada correctamente' });
    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error al crear la transaccion' })
    }
};
// recuperar todas las transacciones registradas
transaccionCtrl.getTransacciones = async (req, res) => {
    try {
        const transacciones = await Transaccion.findAll();
        res.json(transacciones);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener las transacciones' });
    }
};
// recuperar transacciones de un determinado cliente por email
transaccionCtrl.getTransaccionesPorEmail = async (req, res) => {
    try {
        const query = {};
        //filtro por email
        if (req.query.emailCliente != null) {
            query.emailCliente = req.query.emailCliente;
        }
        const transacciones = await Transaccion.findAll({ where: query });
        res.json(transacciones);

    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener las transacciones' });
    }
};

//recuperar transaciones segun el idioma
transaccionCtrl.getTransaccionesPorIdioma = async (req, res) => {
    try {

        const transacciones = await Transaccion.findAll({
            where: {
                idiomaOrigen: req.params.idiomaOrigen,
                idiomaDestino: req.params.idiomaDestino
            }
        });
        res.json(transacciones);

    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener las transacciones' })
    }
}
module.exports = transaccionCtrl;