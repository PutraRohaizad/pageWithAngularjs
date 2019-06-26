var app = angular.module('dea');

app.config(function($routeProvider){

    $routeProvider
    .when('/phones',{
        template: '<phonelist></phonelist>'
    })
    .when('/phones/:phoneid',{
        template: '<phone-detail></phone-detail>'
    })
    .otherwise('/phones');
});