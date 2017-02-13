const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const config = require('./config')
const port = 3050;

const app = module.exports = express();
app.use(bodyParser.json());
app.use(express.static(__dirname ));
// console.log(__dirname);
app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false
}));

// const conn = massive.connectSync({
//   connectionString : "postgres://postgres:@localhost/kombuchadog-clone"
// });
// app.set('db', conn);
const db = app.get('db');
const productsController = require('./productsController');

// app.get('/shop', productsController.getShop);


app.listen(3050, () => {
  console.log('Connected on port', port)
});
