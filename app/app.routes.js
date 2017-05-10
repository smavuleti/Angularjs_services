var app = angular.module('myExpenseTrackerAppRouter', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/Expense Reports');
    $stateProvider
    
    //Expense tracker main page- displaying expense reports
    .state('Expense Reports', {
        url: '/Expense Reports',
        templateUrl:'app/components/main/expenseReports.html'
    })
    
    .state('Add Expense', {
        url: '/Add Expense',
        templateUrl:'app/components/addExpenseTracker/addExpenseView.html'
    })
})