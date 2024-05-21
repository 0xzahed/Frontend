
const express = require ("express");
const path = require ('path');


const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, () => {
    console.log ('Server Is Listening on port 8080');
});



/* server.js
const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, () => {
    console.log ('Server Is Listening on port 8080');
});

// Serve static files from the 'src/assats' directory
app.use(express.static(path.join(__dirname, 'assats')));


app.use(express.static(path.join(__dirname, 'src')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/appointment', (req, res) => {
  res.sendFile(path.join(__dirname, 'appointment.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/doctorlist', (req, res) => {
  res.sendFile(path.join(__dirname, 'doctorlist.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/prevRegistration', (req, res) => {
  res.sendFile(path.join(__dirname, 'prevRegistration.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'register.html'));
});

app.get('/requregi', (req, res) => {
  res.sendFile(path.join(__dirname, 'requregi.html'));
});

app.get('/service', (req, res) => {
  res.sendFile(path.join(__dirname, 'service.html'));
});

*/