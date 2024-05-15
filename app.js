const express = require('express');
const { engine } = require('express-handlebars');
const app = express();

// Configuración de Handlebars como motor de plantillas
app.engine('handlebars', engine({
    defaultLayout: 'main', // Especifica el diseño por defecto
    layoutsDir: __dirname + '/views/layouts', // Directorio de los layouts
    partialsDir: __dirname + '/views/partials' // Directorio de los parciales
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

// Servir archivos estáticos desde 'node_modules' para jQuery y Bootstrap
app.use('/js', express.static('node_modules/jquery/dist'));
app.use('/css', express.static('node_modules/bootstrap/dist/css'));
app.use('/img', express.static('public/img')); // Servir imágenes desde 'public'
app.use('/css', express.static('public/css')); // Servir el CSS personalizado

// Ruta raíz que renderiza la vista Dashboard con un arreglo de productos
app.get('/', (req, res) => {
    const productos = [
        { nombre: 'banana', descripcion: 'Bananas frescas', imagen: 'banana.png' },
        { nombre: 'cebolla', descripcion: 'Cebollas frescas', imagen: 'cebolla.png' },
        { nombre: 'lechuga', descripcion: 'Lechugas frescas', imagen: 'lechuga.png' },
        { nombre: 'papas', descripcion: 'Papas frescas', imagen: 'papas.png' },
        { nombre: 'pimenton', descripcion: 'Pimentones frescos', imagen: 'pimenton.png' },
        { nombre: 'tomate', descripcion: 'Tomates frescos', imagen: 'tomate.png' }
    ];
    res.render('Dashboard', { productos });
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});
