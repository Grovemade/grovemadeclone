const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const config = require('./config')
const port = 3050;

const app = module.exports = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public' ));
// console.log(__dirname);
app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false
}));

const conn = massive.connectSync({
  connectionString : "postgres://wrsnckvi:wp4YM7EAfXNvtYHBYVk5LaQBGZsrrMfC@babar.elephantsql.com:5432/wrsnckvi"
});
app.set('db', conn);
const db = app.get('db');

const productsController = require('./productsController');

app.get('/shop', productsController.getShop);
app.get('/about', productsController.getAboutPage);
app.get('/journal', productsController.getJournal);
app.get('/attributes/:id', function(req, res){
  db.getAttributes([req.params.id], function(err, attrs){
    if(err) {
      res.status(500).json(err);
    }
    else {
      res.status(200).json(attrs);
    }
  })
} )
app.get('/product/:id', productsController.getProduct);
app.get('/carousel/:id', productsController.getCarousel);
app.get('/sizes/:id', productsController.getSizes);
app.get('/images/:id', productsController.getImages);


app.listen(3050, () => {
  console.log('Connected on port', port)
});
