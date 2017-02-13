CREATE TABLE Products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30),
  display_title TEXT,
  description TEXT,
  price INT,
  type TEXT
);

CREATE TABLE Finish (
  id SERIAL PRIMARY KEY,
  productId references Products,
  finish TEXT
);

CREATE TABLE Watches (
  id SERIAL PRIMARY KEY,
  productId references Products,
  shape TEXT,
  model VACHAR(5)
);

CREATE TABLE Sizes (
  id SERIAL PRIMARY KEY,
  productId references Products;
  size TEXT;
  -- short TEXT,
  -- tall TEXT,
  -- 11inch-air TEXT,
  -- 13inch_air TEXT,
  -- 12inch_mb TEXT,
  -- 13inch_mbpro TEXT,
  -- 15inch_mbpro TEXT,
  -- iphoneSE TEXT,
  -- iphone5 TEXT,
  -- iphone5s TEXT,
  -- iphone5c TEXT,
  -- iphone6 TEXT,
  -- iphone6s TEXT,
  -- iphone6plus TEXT,
  -- iphone6splus TEXT,
  -- iphone7 TEXT,
  -- iphone7plus TEXT,
  -- oct2015 TEXT,
  -- pre-oct15 TEXT,
  -- numeric_keypad TEXT
);

-- CREATE TABLE Phones (
--   id SERIAL PRIMARY KEY,
--   productId references products;
--   SE BOOLEAN,
--   6_6S BOOLEAN,
--   6_6S_plus BOOLEAN,
--   7_ BOOLEAN,
--   7plus BOOLEAN
-- );
--
-- CREATE TABLE Docks (
--   id SERIAL PRIMARY KEY,
--   productId references products;
--   SE_5_5s_5c BOOLEAN,
--   6_6S_7 BOOLEAN,
--   6_6S_7plus BOOLEAN,
-- );
--
-- CREATE TABLE DeviceDate (
--   id SERIAL PRIMARY KEY,
--   productId references products;
--   pre_Oct15 BOOLEAN,
--   oct15 BOOLEAN,
--   numeric_keypad BOOLEAN,
-- );

CREATE TABLE Subscriptions (
  id SERIAL PRIMARY KEY,
  email TEXT
);

CREATE TABLE People (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30),
  bio TEXT,
  attr1 TEXT,
  attr2 TEXT,
  image1 TEXT,
  image2 TEXT
);

CREATE TABLE Journal (
  id SERIAL PRIMARY KEY,
  image TEXT,
  title TEXT
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
