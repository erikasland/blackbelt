var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new mongoose.Schema({
    title: String,
    url: String,
    user: [{type: Schema.Types.ObjectId, ref: 'User'}],
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    bid: [{type: Schema.Types.ObjectId, ref: 'Bid'}],
})
mongoose.model('Product', ProductSchema);
var deepPopulate = require('mongoose-deep-populate')(mongoose);
ProductSchema.plugin(deepPopulate, {})