myModule.factory('userFactory', function($http){
    var factory = {};
    factory.user = {};

    factory.getUser = function(callback){
        callback(factory.user)
    }

    factory.create = function(userinfo){
        $http.post('/user', userinfo).success(function(output){
            factory.user = output;
        })
    }
    return factory;
})