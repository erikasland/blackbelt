myModule.controller('resultsController', function(userFactory, bidsFactory, $location){
    var _this = this;
    this.user = userFactory.getUser(function(user){
        _this.user = user;

    });
    console.log(_this.user)
})