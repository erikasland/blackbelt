var myModule = angular.module('myApp', ['ngRoute']);
myModule.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/partials/index.html',
            controller: 'userController',
            controllerAs: 'userControl'
        })
        .when('/bids', {
            templateUrl: '/partials/bids.html',
            controller: 'bidsController',
            controllerAs: 'bidsControl'
        })
        .when('/results', {
            templateUrl: '/partials/results.html',
            controller: 'resultsController',
            controllerAs: 'resultsControl'
        })
})