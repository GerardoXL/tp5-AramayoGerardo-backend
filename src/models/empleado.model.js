const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Publicacion=require('./publicacion.model');
const Empleado = sequelize.define('Empleado', {
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        tableName: 'empleados',
        timestamps: true,
    }
);
// entidad uno a muchos
Publicacion.belongsTo(Empleado, { as: 'empleado', foreignKey: 'idEmpleado' });
Empleado.hasMany(Publicacion, { as: 'publicaciones', foreignKey: 'idEmpleado' });
module.exports = Empleado