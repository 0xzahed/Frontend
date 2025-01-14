const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

const port = 7000;

app.use(express.static(path.join(__dirname, 'src/assats')));
app.use(express.static(path.join(__dirname, '')));

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
async function main() {
try {
  await mongoose.connect('mongodb+srv://zahed24:12345@cluster0.q8dlmtg.mongodb.net/mediaid?retryWrites=true&w=majority&appName=Cluster0');
  console.log("Databse Connected")
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
  
} catch (error) {
  console.log(error.message)
} 
  
}
main()


//registration
const multer = require('multer');
const bodyParser = require('body-parser'); 
app.use(express.static(path.join(__dirname, 'src')));

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directory to save uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Rename file with timestamp
  }
});

const upload = multer({ storage: storage });

// Route to serve registration form
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/register.html'));
});

// Route to handle form submission
app.post('/register', upload.fields([{ name: 'fileToUpload', maxCount: 1 }, { name: 'fileToUpload2', maxCount: 1 }]), (req, res) => {
  const formData = req.body;
  const files = req.files;

  // Process form data and uploaded files
  console.log('Form Data:', formData);
  console.log('Uploaded Files:', files);

  // Here you can add code to save formData and files information to a database

  res.send('Form submitted successfully!');
});

