'use strict';

angular.module('modalApp')
    .service('modal1service',function($scope,$uibModal){

        console.log("modal1service start")

        $scope.items = ['item1', 'item2', 'item3'];
    
        // $scope.open = function (size) {
        //     var modalInstance = $uibModal.open({
        //         templateUrl: 'modal1.html',
        //         controller: 'Modal1InstanceCtrl',
        //         backdrop: "static",
        //         size: size,
        //         resolve: {
        //             items1: function () {
        //                 return $scope.items;
        //             }
        //         }
        //     });
    
        //     modalInstance.result.then(function (selectedItem) {
        //         $scope.selected = selectedItem;
        //     }, function () {
        //         $log.info('Modal dismissed at: ' + new Date());
        //     });
        // };

        var open = function (size) {
            var modalInstance = $uibModal.open({
                templateUrl: 'modal1.html',
                controller: 'Modal1InstanceCtrl',
                backdrop: "static",
                size: size,
                resolve: {
                    items1: function () {
                        return $scope.items;
                    }
                }
            });
    
            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    
        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };

    });

//$uibModalInstance是模态窗口的实例  
angular.module('modalApp')
    .controller('Modal1InstanceCtrl', function ($scope, $uibModalInstance, items1) {
        $scope.items = items1;
        $scope.selected = {
            item: $scope.items[0]
        };

        $scope.ok = function () {
            $uibModalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });