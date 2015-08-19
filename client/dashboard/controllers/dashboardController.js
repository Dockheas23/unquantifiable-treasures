angular.module('ut')
.factory('dashboardFactory', DashboardFactory)
.controller('DashboardController', DashboardController);


DashboardController.$inject = ['dashboardFactory', '$mdToast'];
DashboardFactory.$inject = ['$http', '$meteor'];

function DashboardFactory($http, $meteor) {
    var factory = {};
    factory.getDateString = function (date) {
        return date.toISOString().slice(0, 10);
    };
    factory.getDemands = function () {
        return $meteor.collection(function () {
            return Demands.find({owner: Meteor.userId()});
        });
    };
    factory.getEnvelopes = function () {
        return $meteor.collection(function () {
            return Envelopes.find({owner: Meteor.userId()});
        });
    };
    factory.getIncomes = function () {
        return $meteor.collection(function () {
            return Incomes.find({owner: Meteor.userId()});
        });
    };
    factory.getBudgetRequest = function (balance) {
        var budgetRequest = {balance: balance, income: [], demands: []};
        Demands.find({owner: Meteor.userId()}).forEach(function (demand) {
            budgetRequest.demands.push({
                period: {start: factory.getDateString(demand.date)},
                envelope: demand.envelope.name,
                amount: Number(demand.amount)
            });
        });
        Incomes.find({owner: Meteor.userId()}).forEach(function (income) {
            budgetRequest.income.push({
                date: factory.getDateString(income.date),
                amount: Number(income.amount)
            });
        });
        return budgetRequest;
    };
    factory.getLatestBudget = function (vm) {
        Meteor.call('getLatestBudget', {
            userId: Meteor.userId()
        },
        function (err, result) {
            vm.currentBudget = JSON.stringify(result, null, "	");
            vm.openToast();
        });
    };
    factory.runBudget = function (vm) {
        var balance = Number(vm.openingBalance) || 0;
        Meteor.call('createBudget', {
            budgetRequest: factory.getBudgetRequest(balance),
            userId: Meteor.userId()
        },
        function (err, result) {
            vm.currentBudget = JSON.stringify(result, null, "	");
            vm.openToast();
        });
    };
    factory.clearBudget = function (vm) {
        Meteor.call('clearBudget', function () {
            vm.currentBudget = null;
            vm.openToast();
        });
    }
    return factory;
}

function DashboardController(dashboardFactory, $mdToast) {
  'use strict';
  var vm = this;
  vm.demands = dashboardFactory.getDemands();
  vm.envelopes = dashboardFactory.getEnvelopes();
  vm.incomes = dashboardFactory.getIncomes();
  dashboardFactory.getLatestBudget(vm);

  vm.addDemand = function (event, env) {
    var demandEnvelope = Envelopes.findOne({_id: env._id});
    var demandDate = new Date(event.target.demandDate.value);
    var demandAmount = Number(event.target.demandAmount.value);
    vm.demands.push({
        envelope: demandEnvelope,
        date: demandDate,
        amount: demandAmount,
        owner: Meteor.userId()
    });
    event.target.demandAmount.value = '';
    return false;
  };

  vm.addEnvelope = function (event) {
    var envelopeName = event.target.envelopeName.value;
    vm.envelopes.push({
        name: envelopeName,
        owner: Meteor.userId()
    });
    event.target.envelopeName.value = '';
    return false;
  };

  vm.addIncome = function (event) {
    var incomeDate = new Date(event.target.incomeDate.value);
    var incomeAmount = Number(event.target.incomeAmount.value);
    vm.incomes.push({
        date: incomeDate,
        amount: incomeAmount,
        owner: Meteor.userId()
    });
    event.target.incomeDate.value = '';
    event.target.incomeAmount.value = '';
    return false;
  };

  vm.removeDemand = function (demandId) {
    Demands.remove({_id: demandId});
  };

  vm.removeEnvelope = function (envelopeId) {
    Envelopes.remove({_id: envelopeId});
  };

  vm.removeIncome = function (incomeId) {
    Incomes.remove({_id: incomeId});
  };

  vm.runBudget = function (event) {
    dashboardFactory.runBudget(vm);
    return false;
  };

  vm.clearBudget = function (event) {
    dashboardFactory.clearBudget(vm);
    return false;
  };

  vm.openToast = function (event) {
    $mdToast.show($mdToast.simple().content('Hello!'));
  };

}
