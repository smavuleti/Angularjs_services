angular.module('myExpenseTrackerAppNavbarDirective', []).directive('navDir', [ function(){
    // Runs during compile
    return {
        restrict: 'E',
        // name: '',
        // priority: 1,
        // terminal: true,
         scope: '=menuItems', // {} = isolate, true = child, false/undefined = no change
         controller: function($scope, navbarFactory) { $scope.menuItems = navbarFactory.getNavbarHeadings()},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        // template: '',
         templateUrl: 'app/shared/navigation-bar/navigationbarView.html'
        // replace: true,
        // transclude: true,
        // compile:
    };
}]);