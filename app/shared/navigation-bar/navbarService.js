angular.module('myExpenseTrackerAppNavbarService', [])

.factory('navbarFactory', [function(){
	return{
		getNavbarHeadings: function(){
			var headings = [
			{
				title: 'Expense Reports'
			},{
				title: 'Add Expense'
			}
			];
			return headings;
		}
	};
}])