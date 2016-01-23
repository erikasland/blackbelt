myModule.controller('userController', function(userFactory, $location){
    var _this = this;

    this.createUser = function(){
        userFactory.create(_this.new_user)
        $location.path('/bids')
    }
})