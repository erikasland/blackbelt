var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
    index: function(req, res){
        Product.find({}, function(err, products){
            if(err){
                console.log(err)
            }else{
                res.json(products);
            }
        })
    }
}