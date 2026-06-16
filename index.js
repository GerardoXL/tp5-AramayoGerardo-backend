const express = require('express');
const cors = require('cors');

const sequelize = require('./config/database');
var app = express();

//middlewares 
app.use(express.json({ limit: '10mb' })); //incrementar el limite de Text 
app.use(cors({ origin: 'http://localhost:4200' }));
//cargamos swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');
//Cargamos el modulo de direccionamiento de rutas 
//punto 1
app.use('/api/socio', require('./src/routes/socio.route.js'));
//punto 2
app.use('/api/transaccion', require('./src/routes/transaccion.route.js'));

//punto 3
app.use('/api/empleado', require('./src/routes/empleado.route.js'))
app.use('/api/publicacion', require('./src/routes/publicacion.route.js'));

//ruta documentacion
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//setting 
app.set('port', process.env.PORT || 3000);

// Sincronizar Base de Datos y arrancar el servidor 
// .sync() crea las tablas automáticamente en Postgres si aún no existen 
// force en false crea las tablas solo si no existe, no borra datos en cada inicio 

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas de PostgreSQL sincronizadas');

        app.listen(app.get('port'), () => {
            console.log(`Server started on port`, app.get('port'));
        });
    })
    .catch(err => {
        console.error('No se pudo iniciar el servidor debido a un error en la BD:', err);
    }); 