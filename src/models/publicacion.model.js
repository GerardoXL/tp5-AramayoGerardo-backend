const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Publicacion = sequelize.define('publicacion', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contenido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagenAsociada: {
        type: DataTypes.TEXT, //text por que base64 genera una cadena muy larga y supera a STRING VARCHAR 255 caracteres
        allowNull: false
    },
    fechaPublicacion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    vigente: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},
    {
        tableName: 'publicaciones',
        timestamps: true,
    }
);
module.exports = Publicacion

