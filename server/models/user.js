var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
    name: String,
    _product: {type: Schema.Types.ObjectId, ref: 'Product'},
    product: [{type: Schema.Types.ObjectId, ref: 'Product'}],
    bid: [{type: Schema.Types.ObjectId, ref: 'Bid'}]
})
mongoose.model('User', UserSchema);