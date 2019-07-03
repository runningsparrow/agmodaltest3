'use strict';



angular.module('modalApp')
    .controller('modal1controller',['modal1service',function($scope,modal1service){

        console.log("modal1controller start")
        $scope.open = modal1service.open

    }]);