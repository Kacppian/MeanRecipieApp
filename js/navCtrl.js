angular.module('recipieApp')
    .controller('navCtrl', function($scope, getData) {

        getData.getAll().then(function(data) {
            $scope.data = data.data;
        });
    });