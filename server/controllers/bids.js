var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate')(mongoose);
var Product = mongoose.model('Product');
var Bid = mongoose.model('Bid');
module.exports = {
    show: function(req, res){
        Product.find({}).populate('product.bid').exec(function(err, product){
            if(err){
                console.log(err);
            }else{
                console.log(product[0].bid);
                res.json(product)
            }
        })
    },
    create: function(req, res){
        Product.find({_id: req.body.productid}, function(err, product){
            console.log(req.body)
            var new_bid = new Bid({bid: req.body})
            new_bid._product = product[0].bid
            product[0].bid.push(new_bid);
            new_bid.save(function(err){
                if(err){
                    // console.log(err)
                }else{
                product[0].save(function(err){
                    if(err){
                        console.log(err)
                    }else{
                        console.log(new_bid.bid)
                        res.end();
                    }
                })
            }
            })
        })

    }
}