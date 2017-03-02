INSERT INTO orders
(customerName, email, shippingAddress, amount)
VALUES ($1, $2, $3, $4)
returning id;
