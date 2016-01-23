var user = require('./../controllers/users.js')
var product = require('./../controllers/products.js')
var bid = require('./../controllers/bids.js')
module.exports = function(app){
    app.post('/user', function(req, res){
        user.create(req, res);
    })

    app.get('/products', function(req, res){
        product.index(req, res);
    })


    app.post('/products', function(req, res){
        bid.create(req, res)
    })

    app.get('/bids', function(req, res){
        bid.show(req,res);
    })
}