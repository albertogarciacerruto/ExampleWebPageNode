const express = require('express')
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//Express HBS
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');
app.get('/', function(req, res) {
    //res.send('Hola Mundo')
    /*let salida = {
        nombre: 'Alberto',
        edad: 24,
        url: req.url
    };
    res.send(salida);*/
    res.render('home', {
        nombre: 'Alberto',
        anio: new Date().getFullYear()
    });
})

app.get('/about', function(req, res) {

    res.render('about', {
        anio: new Date().getFullYear()
    });
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port}`);
});