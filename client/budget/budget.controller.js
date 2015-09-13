angular
  .module('ut')
  .controller('BudgetController', ['budgetCalendar', BudgetController]);

function BudgetController(budgetCalendar) {
  /* jshint validthis: true */
  var vm = this;

  vm.activate = activate;
  vm.title = 'BudgetController';
  vm.calendar = {};

  activate();

  ////////////////

  function activate() {
    vm.calendar.months = [];
    var calendar = budgetCalendar.getBudgetCalendar();
    _.map(_.keys(calendar), function (month) {
      var days = [];
      for (var i = 0; i < calendar[month].days; i++) {
        days.push({});
      }
      vm.calendar.months.push({name: month, days: days});
    });
  }


}
