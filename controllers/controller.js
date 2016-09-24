var app = angular.module('myApp');
app.controller('wardrobeCtrl', function ($scope, $http, Map,dressservice) {
    //alert("wardrobeCtrl");
    var _selected;
    $scope.sizes = ["06", "08", "10", "12", "14"];
    //alert("TypeaheadCtrl");
    $scope.selected = undefined;
    $scope.place = {};
    $scope.search = function () {
        $scope.apiError = false;
        Map.search($scope.searchPlace).then(function (res) { // success
            Map.addMarker(res);
            $scope.place.name = res.name;
            $scope.place.lat = res.geometry.location.lat();
            $scope.place.lng = res.geometry.location.lng();
        }, function (status) { // error
            $scope.apiError = true;
            $scope.apiStatus = status;
        });
    }

    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho'
  , 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana'
  , 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania'
  , 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    $scope.ngModelOptionsSelected = function (value) {
        if (arguments.length) {
            _selected = value;
        }
        else {
            return _selected;
        }
    };
    $scope.modelOptions = {
        debounce: {
            default: 500
            , blur: 250
        }
        , getterSetter: true
    };
    $scope.dresses=dressservice.getAll();
});
app.controller('dressCtrl', function ($scope, $http) {
    alert("dressCtrl");
});
