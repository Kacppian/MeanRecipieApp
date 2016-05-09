var app = angular.module('recipieApp');

app.service('getData', function($http) {
    var allRecipies = {};
    this.getAll = function() {
        return $http.get('/dataDick');
    }

});