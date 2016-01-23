myModule.factory('bidsFactory', function($http){
    var factory = {};

    factory.index = function(callback){
        $http.get('/products').success(function(output){
            callback(output);
        })
    }

    factory.create = function(bidinfo, productid, userObject){
        $http.post('/products', {bidinfo: bidinfo.amount, productid: productid, user: userObject}).success(function(output){
            console.log(output);
        })
    }

    factory.show = function(callback){
        $http.get('/bids').success(function(output){
            callback(output);
        })
    }

    return factory;
})