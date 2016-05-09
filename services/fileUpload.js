var app = angular.module('recipieApp');

app.service('fileUpload', function($http) {
    this.uploadFile = function(file, uploadUrl) {
        var fd = new FormData();
        for (var key in file)
            fd.append(key, file[key]);
        $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            })
            .success(function() {
                console.log('Succesfully uploaded bitches');
            })
            .error(function() {
                console.log('Sorry mistake ');
            });
    }
});