myModule.controller('bidsController', function(userFactory, bidsFactory, $location){
    var _this = this;
    this.user = userFactory.user

    this.products = bidsFactory.index(function(products){
        _this.products = products;
    })

    this.bids = bidsFactory.show(function(bids){
        _this.bids = bids;
    })

    this.createBid = function(productid){
        bidsFactory.create(_this.new_bid, productid, _this.user);
    }

    this.endBid = function(user){
        $location.path('/results');
    }
})