var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BidSchema = new mongoose.Schema({
    bid: {
        bidinfo: String,
        productid: Number,
        user: {
            id: Number,
            name: String,
        }
    },
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    _product: {type: Schema.Types.ObjectId, ref: 'Product'}
})
mongoose.model('Bid', BidSchema);