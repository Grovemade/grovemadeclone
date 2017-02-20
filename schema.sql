CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  type VARCHAR(255),
  finish VARCHAR(255),
  image1 TEXT,
  image2 TEXT,
  price VARCHAR(255)
);

CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  size_id integer,
  url TEXT
);

CREATE TABLE journal_page (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  photo_url TEXT
);

CREATE TABLE carousel (
  id SERIAL PRIMARY KEY,
  product_id INTEGER,
  url TEXT
);

CREATE TABLE sizes (
  id SERIAL PRIMARY KEY,
  product_id INTEGER,
  size VARCHAR(255),
  price VARCHAR(255)
);

CREATE TABLE about_page (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  bio TEXT,
  link TEXT,
  thumbnail TEXT,
  hover_thumb TEXT,
  bio_pic TEXT
);

CREATE TABLE about_attributes (
  id SERIAL PRIMARY KEY,
  employee_id INTEGER,
  attribute TEXT
);


CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customerName VARCHAR(40),
  email TEXT,
  shippingAddress TEXT,
  billingAddress TEXT,
  phone TEXT,
  amount INT
);

CREATE TABLE orderItems (
  id SERIAL PRIMARY KEY,
  orderId INT references orders,
  productId INT references merchandise,
  quantity INT
);

CREATE TABLE productImages (
  id SERIAL PRIMARY KEY,
  productId INT references merchandise,
  image1 https://grovemade.com/static/thumbnails/shop/variant/brass-knife-grid-A1_1_645x645_85.jpg?_v=1476734945.36
);
