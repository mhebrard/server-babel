import express from 'express';
// Other
// import path from 'path';
// import fs from 'graceful-fs';
// import bodyParser from 'body-parser';
// import morgan from 'morgan';

// Init app
const app = express();
const port = process.env.PORT || 3333;
// Create a write stream for log
// var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

// Config app
// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static('public'));
// Other
// app.use(bodyParser.urlencoded({extended: true})); // form parser
// app.use(bodyParser.json())
// app.use(morgan('combined', {stream: accessLogStream})); // setup the logger

// Routes

app.get('/', (req, res) => {
  console.log('HOME');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Node server Hello World\n');
});

// Listen
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
