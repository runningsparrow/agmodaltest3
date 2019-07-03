'use strict';

var modalapp = angular.module('modalApp', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap',
]);


console.log("before modalapp config")

modalapp
    .config(['$routeProvider',function($routeProvider){

        $routeProvider
            .when('/modal1',{
                templateUrl:'../templates/modal1.html',
                controller:'modal1controller',
            })
            .when('/modal2',{
                templateUrl:'../templates/modal2.html',
                controller:'modal2controller',
            })
            .when('/modal3',{
                templateUrl:'../templates/modal3.html',
                controller:'modal3controller',
            }).
            otherwise('/');
        console.log('log modalapp')
    }]);

    console.log("after modalapp config")