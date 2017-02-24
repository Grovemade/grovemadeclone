const app = require('./server');
const db = app.get('db');

module.exports = {

getShop: (req, res) => {
  db.read_shop((err, response) => {
    if(err) {
      console.log(err);
      res.status(200).json(err);
    } else {
      console.log('getting products', response);
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
      console.log('getting about page', response);
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
      console.log('getting jounral', response);
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
      console.log('PRODUCT')
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
      console.log('CAROUSEL', response);
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
      console.log('SIZES', response);
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
      console.log('IMAGES', response);
      res.status(200).json(response);
    }
  });
}



};
