var app = angular.module('contactApp');
app.controller('ContactController', ['$scope', 'contactservice', function ($scope, contactservice) {

    function refesh() {
        $scope.contacts = contactservice.getAll();
        $scope.newcontact = {
            id: contactservice.getNewId(),
            name: '',
            mobile: '',
            email: ''
        }

    };

    refesh();

    $scope.edit = function (id) {
        var result = contactservice.get(id);
        if (result !== undefined) {
            $scope.newcontact = {
                id: result.id,
                name: result.name,
                mobile: result.mobile,
                email: result.email
            }

        }
       
    };

    $scope.delete = function (id) {
        contactservice.delete(id);
        refesh();
    };

    $scope.saveContact = function () {
        if ($scope.newcontact.name.length <= 0 ||
            $scope.newcontact.email.length <= 0 ||
            $scope.newcontact.mobile.length <= 0) {
            return;
        }
        contactservice.saveContact($scope.newcontact);
        refesh();
        
    };
}]);