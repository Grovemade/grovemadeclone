const app = require('./server');
const db = app.get('db');
const stripe = require("stripe")("sk_test_YWeRVnmViJfikag0T9Z4QH6m");


module.exports = {

getShop: (req, res) => {
  db.read_shop((err, response) => {
    if(err) {
      console.log(err);
      res.status(200).json(err);
    } else {
      // console.log('getting products', response);
      res.status(200).json(response);
    }
  });
},

getAboutPage: (req, res) => {
  db.read_aboutPage((err, response) => {
    if(err) {
      console.log(err);
      res.status(200).json(err);
    } else {
      // console.log('getting about page', response);
      res.status(200).json(response);
    }
  });
},

getJournal: (req, res) => {
  db.read_journal((err, response) => {
    if(err) {
      console.log(err);
      res.status(200).json(err);
    } else {
      // console.log('getting jounral', response);
      res.status(200).json(response);
    }
  });
},

getProduct: (req, res) => {
  db.getProduct(req.params.id, (err, response) => {
    if(err) {
      console.log(err);
      res.status(500).json(err);
    } else {
      // console.log('PRODUCT')
      res.status(200).json(response);
    }
  });
},

getCarousel: (req, res) => {
  db.getCarousel(req.params.id, (err, response) => {
    if(err) {
      console.log(err);
      res.status(200).json(err);
    } else {
      // console.log('CAROUSEL', response);
      res.status(200).json(response);
    }
  });
},

getSizes: (req, res) => {
  db.getSizes(req.params.id, (err, response) => {
    if(err) {
      console.log(err);
      res.status(200).json(err);
    } else {
      // console.log('SIZES', response);
      res.status(200).json(response);
    }
  });
},

getImages: (req, res) => {
  db.getImages(req.params.id, (err, response) => {
     if(err) {
      console.log(err);
      res.status(200).json(err);
    } else {
      // console.log('IMAGES', response);
      res.status(200).json(response);
    }
  });
},

addToCart: (req, res) => {
if (!req.session.cart) {
  req.session.cart = [];
}
  req.session.cart.push(req.body);
  // console.log('adding to cart', req.session.cart)
  res.json(req.session.cart)
},

getCart: (req, res) => {
  // console.log('getting cart', req.session.cart);
  res.json(req.session.cart);
},

updateQuantity: (req, res) => {
  console.log('trying to update', req.body);
  for (let i = 0; i < req.session.cart.length; i++) {
    if (req.session.cart[i].productId == req.params.productId) {
      // console.log('original quantity', req.session.cart[i].productQuantity);
      req.session.cart[i].productQuantity = req.body.productQuantity;
      console.log('updating new quantity', req.session.cart[i].productQuantity);
      res.json(req.session.cart);
    }
  }
},

removeFromCart: (req, res) => {
  // console.log(req.params.id)
  console.log('trying to remove', req.params);
  for (let i = 0; i < req.session.cart.length; i++) {
    if (req.session.cart[i].productId == req.params.id) {
      req.session.cart.splice(i, 1);
    }
  }
  res.json(req.session.cart);
},

postOrder: (req, res) => {
  console.log('BODY', req.body);
  var token = req.body.token.id; // Using Express
  console.log('token', token);
// Charge the user's card:
stripe.customers.create({
  email: req.body.token.email,
  source: token,
}).then(function(customer) {
  return stripe.charges.create({
    amount: req.body.total,
    currency: "usd",
    description: "Example charge",
    customer: customer.id,
  })
}).then(function(charge){
//     // asynchronously called
    console.log('CHARGE', charge);
    var order = req.body.token;
    var backcart = req.body.cart;
    // console.log(req.body.cart.size);
    var address = order.card.address_line1 + ' ' + order.card.address_city + ' ' + order.card.address_zip;
    console.log('ADDRESS!!!', address);
    var values = [order.card.name, order.email, address, req.body.total];
    db.create_order(values, (err, response) => {
      // console.log('creating order');
      if (err) {
        console.log('ORDER ERROR!!!!!!!', err);
      } else {
        console.log('ORDER', response);
       for (let i = 0; i < backcart.length; i++) {
         console.log('cart', backcart[i]);
         console.log(backcart[i].productId, backcart[i].size.size, backcart[i].productQuantity);
         db.create_orderitems(response[0].id, backcart[i].productId, backcart[i].size.size, backcart[i].productQuantity, (err, response) => {
           if (err) {
             console.log('ORDERITEMS ERROR!!!!!!!', err);
           }
         });
       }
       console.log('ORDERITEMS', response);
       res.status(200).json(response);
      }
    });
  });
},

}; //end of controller
