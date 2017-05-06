var app = angular.module('myExpenseTrackerAppRouter', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/Reports');
    $stateProvider
    
    //Expense tracker main page- displaying expense reports
    .state('Reports', {
        url: '/Reports',
        templateUrl:'app/components/main/expenseReports.html'
    })
    
    .state('Add Expense', {
        url: '/Add Expense',
        templateUrl:'app/components/addExpenseTracker/addExpenseView.html'
    })
})