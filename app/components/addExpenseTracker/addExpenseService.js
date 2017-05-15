angular.module('myExpenseTrackerAddExpenseService',[]).factory('addExpenseFactory', function(){ 
var data =[];
        var service ={};
    service.insertData = function(dataSet){
     data.push(dataSet);   
    }
    
    service.getData= function(){
        return data;
    }
    
    service.setData = function(updateData){
        data = updateData;
    }
   /* service.removeData = function(item){
        var index = data.indexOf(item);
        data.splice(index,1);
    } */
    return service;
});
