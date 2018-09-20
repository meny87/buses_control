const express = require('express');
const http = require('http');
const path = require('path');
const hbs = require('hbs');

const publicPath = path.join(__dirname, '../public');
const partialsPath = path.join(__dirname, '../views/partials');

var app = express();
var server = http.createServer(app);

hbs.registerPartials(partialsPath);
app.set('view engine', hbs);

app.use(express.static(publicPath));

app.get('/', (req,res)=>{
  res.render('home.hbs');
});

app.get('/buses_choferes', (req,res)=>{
  res.render('buses_choferes.hbs',{
    page_title: 'Administración de Choferes'
  });
});

app.get('/buses_autobuses', (req,res)=>{
  res.render('buses_autobuses.hbs',{
    page_title: 'Control de Autobuses'
  });
});

app.get('/buses_rutas', (req,res)=>{
  res.render('buses_rutas.hbs',{
    page_title: 'Control de Rutas'
  });
});

app.get('/buses_ingresos', (req,res)=>{
  res.render('buses_ingresos.hbs',{
    page_title: 'Registro de Ingresos'
  });
});
app.get('/buses_egresos', (req,res)=>{
  res.render('buses_egresos.hbs',{
    page_title: 'Registro de Egresos'
  });
});

app.get('/placas_placas', (req,res)=>{
  res.render('placas_placas.hbs',{
    page_title: 'Control de Autobuses'
  });
});
app.get('/placas_cuotas', (req,res)=>{
  res.render('placas_cuotas.hbs',{
    page_title: 'Control de Autobuses'
  });
});
app.get('/placas_cliente', (req,res)=>{
  res.render('placas_cliente.hbs',{
    page_title: 'Control de Autobuses'
  });
});

server.listen(3000, ()=>{
  console.log('Server is up and listening in port 3000');
});
