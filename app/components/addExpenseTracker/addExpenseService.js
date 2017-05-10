angular.module('myExpenseTrackerAddExpenseService',[]).factory('addExpenseFactory', function(){ 
var data =[];
        var service ={};
    service.insertData = function(dataSet){
     data.push(dataSet);   
    }
    
    service.getData= function(){
        return data;
    }
    
    service.removeData = function(){
        
    }
    return service;
});
