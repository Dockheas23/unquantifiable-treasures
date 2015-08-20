angular.module('ut')
.factory('dashboardFactory', DashboardFactory)
.controller('DashboardController', DashboardController);


DashboardController.$inject = ['$mdToast', 'dashboardFactory'];
DashboardFactory.$inject = ['$meteor'];

function DashboardFactory($meteor) {
    var factory = {};
    var currentUserId = Meteor.userId();
    factory.getDateString = function (date) {
        return date.toISOString().slice(0, 10);
    };
    factory.getDemands = function () {
        return $meteor.collection(function () {
            return Demands.find({owner: currentUserId});
        });
    };
    factory.getEnvelopes = function () {
        return $meteor.collection(function () {
            return Envelopes.find({owner: currentUserId});
        });
    };
    factory.getIncomes = function () {
        return $meteor.collection(function () {
            return Incomes.find({owner: currentUserId});
        });
    };
    factory.getBudgetRequest = function (balance) {
        var budgetRequest = {balance: balance, income: [], demands: []};
        Demands.find({owner: currentUserId}).forEach(function (demand) {
            budgetRequest.demands.push({
                period: {start: factory.getDateString(demand.date)},
                envelope: demand.envelope.name,
                amount: Number(demand.amount)
            });
        });
        Incomes.find({owner: currentUserId}).forEach(function (income) {
            budgetRequest.income.push({
                date: factory.getDateString(income.date),
                amount: Number(income.amount)
            });
        });
        return budgetRequest;
    };
    factory.getLatestBudget = function () {
        return $meteor.call('getLatestBudget', {
            userId: Meteor.userId()
        });
    };
    factory.runBudget = function (openingBalance) {
        var balance = Number(openingBalance) || 0;
        return $meteor.call('createBudget', {
            budgetRequest: factory.getBudgetRequest(balance),
            userId: Meteor.userId()
        });
    };
    factory.clearBudget = function () {
        return $meteor.call('clearBudget');
    }
    return factory;
}

function DashboardController($mdToast, dashboardFactory) {
  'use strict';
  var vm = this;
  vm.currentUserId = Meteor.userId();
  vm.demands = dashboardFactory.getDemands();
  vm.envelopes = dashboardFactory.getEnvelopes();
  vm.incomes = dashboardFactory.getIncomes();
  dashboardFactory.getLatestBudget()
      .then(function (result) {
          vm.currentBudget = JSON.stringify(result, null, "	");
      });

  vm.addDemand = function () {
    var demandEnvelope = Envelopes.findOne({_id: vm.dFormEnvelope._id});
    var demandDate = new Date(vm.dFormDate);
    var demandAmount = Number(vm.dFormAmount);
    vm.demands.save({
        envelope: demandEnvelope,
        date: demandDate,
        amount: demandAmount,
        owner: vm.currentUserId
    });
    vm.dFormEnvelope = null;
    vm.dFormDate = null;
    vm.dFormAmount = null;
    return false;
  };

  vm.addEnvelope = function () {
    vm.envelopes.save({
        name: vm.eFormName,
        owner: vm.currentUserId
    });
    vm.eFormName = null;
    return false;
  };

  vm.addIncome = function () {
    var incomeDate = new Date(vm.iFormDate);
    var incomeAmount = Number(vm.iFormAmount);
    vm.incomes.save({
        date: incomeDate,
        amount: incomeAmount,
        owner: vm.currentUserId
    });
    vm.iFormDate = null;
    vm.iFormAmount = null;
    return false;
  };

  vm.removeDemand = function (demand) {
    vm.demands.remove(demand);
  };

  vm.removeEnvelope = function (envelope) {
    vm.envelopes.remove(envelope);
  };

  vm.removeIncome = function (income) {
    vm.incomes.remove(income);
  };

  vm.runBudget = function (event) {
    dashboardFactory.runBudget(vm.openingBalance)
        .then(function (result) {
            vm.currentBudget = JSON.stringify(result, null, "	");
        });
    return false;
  };

  vm.clearBudget = function (event) {
    dashboardFactory.clearBudget()
        .then(function (result) {
            vm.currentBudget = null;
        });
    return false;
  };

  vm.openToast = function (event) {
    $mdToast.show($mdToast.simple().content('Hello!'));
  };

}
