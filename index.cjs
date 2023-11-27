const express = require("express");
const bodyParser = require("body-parser");
const { dirname } = require("path");
const { fileURLToPath } = require("url");
const path = require("path");

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express ();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));


// Set the views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // Set EJS as the view engine

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up a route for the main page
app.get('/', (req, res) => {
  res.render('index'); // Use res.render for EJS files
});

app.get('/dp', (req, res) => {
    res.render('dp'); // Use res.render without the file extension
  });


app.get('/weekly', (req, res) => {
    res.render('weekly'); // Use res.render without the file extension
  });
  
app.get('/links', (req, res) => {
    res.render('links'); // Use res.render without the file extension
  });

  app.get('/extra', (req, res) => {
    res.render('extra'); // Use res.render without the file extension
  });
  
  app.listen(port, '0.0.0.0', () => {
    console.log(`Listening to port ${port}`); 
});

module.exports = app;