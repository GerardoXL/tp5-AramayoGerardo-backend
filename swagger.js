const swaggerAutogen = require('swagger-autogen')();
const doc = {
    info: {
        title: 'API de Gestion- Practica Backend',
        description: 'Documentacion para la Api de socios, Transacciones y publicaciones',
        version: '1.0.'
    },
    host: 'localhost:3000', 
    basePath: "/",
    schemes: ['http', 'https'],
    tags: [
        {
            name: 'Socios',
            description: 'Operaciones de CRUD y filtro para socios.'
        },
        {
            name: 'Transacciones',
            description: 'Operaciones de registro e historico de traducciones.'
        },
        {
            name: 'Empleados',
            description: 'Operaciones para la gestion de empleados.'
        },
        {
            name: 'Publicaciones',
            description: 'Operaciones de CRUD y busqueda combinada de publicaciones.'
        }
    ],
    definitions: {
        Socio: {
            nombre: 'Damian',
            apellido: 'Fernandez',
            foto: 'https://imgs.search.brave.com/...',
            numeroSocio: 100,
            activo: true
        },
        Transaccion: {
            idiomaOrigen: 'Español',
            textoOrigen: 'Hola, ¿cómo estás hoy?',
            idiomaDestino: 'Inglés',
            textoDestino: 'Hello, how are you today?',
            emailCliente: 'juan.perez@gmail.com'
        },
        Empleado: {
            nombre: 'Maria',
            apellido: 'Perez',
            dni: '28987654',
            email: 'maria.perez@hotmail.com'
        },
        Publicacion: {
          titulo: 'Nueva funcionalidad disponible',
            contenido: 'Se agregó soporte para exportar reportes en formato PDF.',
            imagenAsociada: 'data:image/png;base64,iVBORw0KGgo...',
            fechaPublicacion: '2026-06-15',
            vigente: true,
            idEmpleado: 2   
        }
    }
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./index.js']; // verifica la ruta 

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log(`Documentación generada en ${outputFile}`);
    //require('./index.js'); // verifica la ruta donde inicia tu app 
});