const http = require('http');
const fs = require('fs')
const express = require('express')

const hostname = '127.0.0.1';
const port = 8080;
const app = express();

app.listen(port, () => { 
  console.log('Server listening')
})

app.get('/', (req, res) => { 
  res.sendFile(__dirname + '/index.html')
});

app.get('/about', (req, res) => { 
  res.sendFile(__dirname + '/about.html')
});

app.get('/contact-me', (req, res) => { 
  res.sendFile(__dirname + '/contact-me.html')
});

app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/404.html')
});