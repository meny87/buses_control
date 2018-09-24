const express = require('express');
const http = require('http');
const https = require('https');
const path = require('path');
const hbs = require('hbs');
const moment = require('moment');
const request = require('request');
const Client = require('node-rest-client').Client;
const url = require('url');


const publicPath = path.join(__dirname, '../public');
const partialsPath = path.join(__dirname, '../views/partials');


const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);

var serviceURL = 'https://taxiamigodgo-api.herokuapp.com';

hbs.registerPartials(partialsPath);
app.set('view engine', hbs);

app.use(express.static(publicPath));


app.get('/', (req, res) => {
  res.render('home.hbs');
});

app.get('/buses_choferes', (req, res) => {
  res.render('buses_choferes.hbs', {
    page_title: 'Administración de Choferes'
  });
});

app.get('/buses_autobuses', (req, res) => {
  res.render('buses_autobuses.hbs', {
    page_title: 'Control de Autobuses'
  });
});

app.get('/buses_rutas', (req, res) => {
  res.render('buses_rutas.hbs', {
    page_title: 'Control de Rutas'
  });
});

app.get('/buses_ingresos', (req, res) => {
  res.render('buses_ingresos.hbs', {
    page_title: 'Registro de Ingresos'
  });
});

app.get('/buses_egresos', (req, res) => {
  res.render('buses_egresos.hbs', {
    page_title: 'Registro de Egresos'
  });
});

app.get('/placas_placas', (req, res) => {
  res.render('placas_placas.hbs', {
    page_title: 'Control de Placas'
  });
});

app.get('/placas_cuotas', (req, res) => {
  res.render('placas_cuotas.hbs', {
    page_title: 'Control de Cuotas'
  });
});

app.get('/placas_cliente', (req, res) => {
  res.render('placas_cliente.hbs', {
    page_title: 'Control de Clientes'
  });
});

app.get('/amigo_conductores', (req, res) => {
  res.render('amigo_conductores.hbs', {
    page_title: 'Administración de Conductores'
  });
});

app.get('/amigo_unidades', (req, res) => {
  res.render('amigo_unidades.hbs', {
    page_title: 'Control de unidades'
  });
});

app.get('/amigo_ingresos_create', (req, res) => {
  res.render('amigo_ingresos_create.hbs', {
    page_title: 'Registrar Nuevos Ingresos',
    current_week: moment().format('w'),
    current_year: moment().format('YY')
  });
});

app.get('/amigo_ingresos_view', (req, res) => {
  if(req.query.unidad){
    var client = new Client();
    var serviceName = '/cuotas';

    var args = {
      data: req.query,
      headers: {
        "Content-Type": "application/json"
      }
    };

    var serviceUrl = url.parse(`${serviceURL}${serviceName}`);
    client.post(serviceUrl, args, (data, response)=>{});
  };

  request({
    url: `${serviceURL}/cuotas`,
    json: true
  }, (error, response, body) => {
    var cuotas = body.cuotas;

    cuotas.map((cuota) => cuota.fecha = moment(cuota.fecha).format('D/MMM/YYYY h:mm a'));

    var data = {
      cuotas,
      page_title: 'Consultar Ingresos',
      current_week: moment().format('w'),
      current_year: moment().format('YY')
    };

    //console.log('Data: ', data);
    res.render('amigo_ingresos_view.hbs', data);
  });
});

app.get('/amigo_egresos', (req, res) => {
  res.render('amigo_egresos.hbs', {
    page_title: 'Control de Egresos'
  });
});

server.listen(port, () => {
  console.log('Server is up and listening in port 3000');
});
