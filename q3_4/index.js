const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let products = [];

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Route for the product page
app.get('/', (req, res) => {
    res.render('product');
});

// Route for adding a product to the cart
app.post('/add', (req, res) => {
    let product = {
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity
    };
    products.push(product);
    res.redirect('/');
});

// Route for the shopping cart page
app.get('/cart', (req, res) => {
    res.render('shoppingcart', { products });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
