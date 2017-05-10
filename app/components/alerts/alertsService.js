angular.module('myExpenseTrackerAppAlertService',[]).factory('alertFactory', function(){ 
    
    
     var alerts = {};
    var displayMessage = {}
     alerts.addAlert = function(message,type){
        displayMessage.message = message;
         displayMessage.type = type;
         return displayMessage;
    }
    return alerts;
    
})
                                                             
                                                            