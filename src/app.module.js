var app = angular.module('dea',[
    'ngRoute',
    'phone-list',
    'phoneDetail',
    'core'
]);

app.controller ('PhoneListController', function ($scope) {
    $scope.name = 'Putra';

});