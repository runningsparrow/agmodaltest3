'use strict';

modalapp
    .controller('modal1controller',['modal1service',function($scope,$log,modal1service){

        $scope.open = modal1service.open

    }]);