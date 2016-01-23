var mongoose = require('mongoose');
var User = mongoose.model('User')
module.exports = {
    create: function(req, res){
        console.log(User)
        var new_user = new User({name: req.body.name});
        console.log(new_user)
        new_user.save(function(err){
            if(err){
                console.log(err)
            }else{
                res.json(new_user)
            }
        })
    }
}