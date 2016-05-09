var app = angular.module('recipieApp', ['ngMaterial', 'ngRoute', 'ngFileUpload']);
app.config(function($routeProvider, $locationProvider, $mdThemingProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider.
    when('/home', {
        templateUrl: 'views/home.html',
        controller: 'navCtrl'
    }).
    when('/create', {
            templateUrl: 'views/create.html',
            controller: 'createCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });


    $mdThemingProvider.theme('default')
    .primaryPalette('green');
    //.dark();

  });
