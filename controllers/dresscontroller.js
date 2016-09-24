var app = angular.module('myApp');
app.controller('dresscontroller', ['$scope', 'dressservice', function ($scope, dressservice) {

    function refesh() {
        $scope.dresses = dressservice.getAll();
        $scope.newdress = {
            id: dressservice.getNewId(),
           
        }

    };

    refesh();

    $scope.edit = function (id) {
        var result = dressservice.get(id);
        if (result !== undefined) {
            $scope.newdress = {
               
            }

        }
       
    };

    $scope.delete = function (id) {
        dressservice.delete(id);
        refesh();
    };

    $scope.saveContact = function () {
        
        dressservice.saveDress($scope.newdress);
        refesh();
        
    };
}]);