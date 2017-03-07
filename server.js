const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const config = require('./config');
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const bunyan = require('bunyan');
// const port = 3050;
const stripe = require("stripe")("sk_test_YWeRVnmViJfikag0T9Z4QH6m");


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
app.post('/cart', productsController.addToCart);
app.get('/cart', productsController.getCart);
app.put('/cart/:productId', productsController.updateQuantity);
app.delete('/cart/:id', productsController.removeFromCart);
app.post('/order', productsController.postOrder);


// NODEMAILER
// Create a SMTP transporter object
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user:  config.gmail.user,
        pass:  config.gmail.pass
    },
    logger: bunyan.createLogger({
        name: 'nodemailer'
    }),
    debug: true // include SMTP traffic in the logs
}, {
    // default message fields

    // sender info
    from: 'Grovemade <grovemade4you@gmail.com>',
    headers: {
        'X-Laziness-level': 1000 // just an example header, no need to use this
    }
});

console.log('SMTP Configured');

// Message object
let message = {
    // Comma separated list of recipients
    // to: ENTER EMAIL IN QUOTES HERE,

    // Subject of the message
    subject: 'Thanks for Subscribing to our Newsletter!', //
    // plaintext body
    // text: 'We appreciate you subscribing to our newsletter! You will always be up to date with our latest products!',
    //HTML body
    html: '<p>Thanks for subscribing to our newsletter! You will now be up to date with our latest news and product releases!'
     +"<p>You will also be given exclusive offers to our products. Feel free to invite your friends so they don't miss out on these great offers!</p>"
     +'<img src="https://static1.squarespace.com/static/52ca3c20e4b03b30610d8c65/t/58a4b3d5db29d6f91a5754f1/1487188954725/" />'
     +"<p><i>When it comes down to it, it’s more than just designing and making products. It’s about the people behind the process and all of you throughout the world who share the same values.</i><b style='color:#808080;'>- Grovemade</b></p>",
  }

app.post('/newsletter', function(req, res) {
  console.log('Sending Mail');
  message.to = req.body.email;
  transporter.sendMail(message, (error, info) => {
    console.log("body", req.body.email);
      if (error) {
          // console.log('Error occurred');
          // console.log(error.message);
          return;
      } else {
      // console.log('Message sent successfully!');
      // console.log('Server responded with "%s"', info.response);
      transporter.close();
      db.createEmail([req.body.email], function(err, success) {
        if (err) {
          res.status(500).json(err)
        } else {
          console.log("newsletter saved", success);
          res.status(200).json(success)
        }
      })
      }
  });

})

app.listen(port, () => {
  console.log('Connected on port', port)
});
