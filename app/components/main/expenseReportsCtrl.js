angular.module('myExpenseTrackerAppReportsCtrl', []).controller('expenseReportsCtrl',function($scope, addExpenseFactory){
   // alert(addExpenseFactory.getData());
 this.expenses = (addExpenseFactory.getData());
    
    
    //to remove the expense row
   // addExpenseFactory.removeData(item);
    $scope.remove = function(item){
        //alert(item);
        alert($scope.expenses[item]);
        //var index = $scope.expenses[item];
       // $scope.expenses.splice(index,1);
    }
})


  