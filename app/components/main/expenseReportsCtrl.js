angular.module('myExpenseTrackerAppReportsCtrl', []).controller('expenseReportsCtrl',function($scope, addExpenseFactory){
    alert(addExpenseFactory.getData());
 this.expenses = (addExpenseFactory.getData());
})


  