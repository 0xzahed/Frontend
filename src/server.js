const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'src/assats')));
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/about.html'));
});

app.get('/appointment', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/appointment.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/contact.html'));
});

app.get('/doctorlist', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/doctorlist.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/login.html'));
});

app.get('/prevRegistration', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/prevRegistration.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/register.html'));
});

app.get('/requregi', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/requregi.html'));
});

app.get('/service', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/service.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
