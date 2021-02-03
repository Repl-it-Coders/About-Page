// TO CONFIGURE:
// UPLOAD A IMAGE TO USE AS A FAVICON INTO THE 'TEMPLATES' FOLDER
// THEN RENAME IT TO 'favicon.png'
// IT WILL AUTOMATICALLY BE SET AS THE FAVICON
// GOTO ALL OF THE HTML DOCUMENTS IN THE 'TEMPLATES' FOLDER AND EDIT THE TEXT.
// TELL PEOPLE ABOUT YOUR SITE!

const express = require('express');

const app = express();

var options = { 
  root: __dirname+'/templates/'
}; 

function sendFile(filename, res) {
  return res.sendFile(filename, options)
}

function sendFileSpecial(filename, res, int) {
  res.status(int)
  return res.sendFile(filename, options)
}

app.get('/', (req, res) => {
  sendFile('index.html', res)
});

app.get('/about', (req, res) => {
  sendFile('about.html', res)
});

app.get('/style.css', (req, res) => {
  sendFile('style.css', res)
});

app.get('/script.js', (req, res) => {
  sendFile('script.js', res)
});

app.get('/imgs/Dark_Mode.svg', (req, res) => {
  sendFile('imgs/Dark_Mode.svg', res)
});

app.get('/favicon.png', (req, res) => {
  sendFile('favicon.png', res)
});


app.get('*', (req, res) => {
  sendFileSpecial('404.html', res, 404);
});

app.listen(3000, () => {
  console.log('server started');
});
