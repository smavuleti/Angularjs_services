angular.module('myExpenseTrackerAppReportsCtrl', []).controller('expenseReportsCtrl',function($scope, addExpenseFactory){
   // alert(addExpenseFactory.getData());
 this.expenses = (addExpenseFactory.getData());
    
    
    //to remove the expense row
   // addExpenseFactory.removeData(item);
    $scope.remove = function($index, expense){
        console.log(expense);
        alert("Expense is removed");
        console.log(addExpenseFactory.getData());
        
        var newData = addExpenseFactory.getData();
        newData.splice($index,1);
        addExpenseFactory.setData(newData);
       // this.expenses.pop();
       // $scope.$emit('')
    }
})


  