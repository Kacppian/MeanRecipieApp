angular.module('recipieApp')
    .controller('createCtrl', ['$scope', 'fileUpload', '$http', '$window', function($scope, fileUpload, $http, $window) {

        $scope.recipieForm = {};

        $scope.uploadFile = function() {

            var file = $scope.myFile;
            //console.log('I am file from createCtrljs ' + file);
            var uploadUrl = "/multer";
            var fd = new FormData();
            fd.append('file', file);
            fd.append('name', $scope.recipieForm.name);
            fd.append('prep', $scope.recipieForm.prep);
            $http.post(uploadUrl, fd, {
                    transformRequest: angular.identity,
                    headers: {
                        'Content-Type': undefined
                    }
                })
                .success(function(data) {
                    //console.log("success!! here's the data from success ");
                })
                .error(function() {
                    console.log("error!!");
                });

            $window.location.href = '/';
        };

    }]);