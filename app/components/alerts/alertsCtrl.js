angular.module('myExpenseTrackerAppAlertCtrl', []).controller('alertCtrl',function($scope, alertFactory){
    $scope.success = function(){
        alertFactory.addAlert('Expense Added successfully','alert-success');
    };
    $scope.error = function(){
        alertFactory.addAlert('Error while adding expense','alert-error');
    }
})
