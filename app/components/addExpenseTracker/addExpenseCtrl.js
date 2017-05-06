angular.module('myExpenseTrackerAppAddExpenseCtrl', []).controller('addExpenseCtrl',function($scope, addExpenseFactory){
     $scope.categories=['Fruits','Snacks','Vegetables'];
         $scope.selectedItem;
            $scope.selectedCategory = function(item){
                console.log("in selectedCategory")
                $scope.selectedItem = item;
                
            }
            
            $scope.expenses = [];
        

    
        $scope.saveExpense = function() {
            
            
            
            
            //category:
            $scope.form.selectedItem = $scope.selectedItem;
            
            //date
            //$scope.form.date = new Date();
            var dataSaved = {};
            dataSaved.categoryName = $scope.form.selectedItem;
            dataSaved.date = $scope.form.date;
            dataSaved.amount = $scope.form.amount;
            dataSaved.storeName = $scope.form.storeName;
        
            addExpenseFactory.insertData(dataSaved);
            console.log(addExpenseFactory.getData());
            
        }  
})

