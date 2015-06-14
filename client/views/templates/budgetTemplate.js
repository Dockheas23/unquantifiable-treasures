'use strict';

function getDateString(date) {
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}

function getBudgetRequest(balance) {
  var budgetRequest = {balance: balance, income: [], demands: []};
  Demands.find({}).forEach(function (demand) {
    budgetRequest.demands.push(
      {
        period: {start: getDateString(demand.date)},
        envelope: demand.envelope.name,
        amount: Number(demand.amount)
      });
  });
  Incomes.find({}).forEach(function (income) {
    budgetRequest.income.push(
      {
        date: getDateString(income.date),
        amount: Number(income.amount)
      });
  });
  return budgetRequest;
}


Template.envelopeTemplate.helpers({
  fills: function () {
    return Session.get('fills');
  },
  closingBalance: function () {
    return Session.get('closingBalance');
  }
});


Template.home.events({
  'submit .run-budget': function (event) {
    var balance = Number(event.target.openingBalance.value) || 0
    Meteor.call('getFills', {budgetRequest: getBudgetRequest(balance)},
      function (err, result) {
        Session.set('closingBalance', result.balance);
        Session.set('fills', result.fills);
      });
    event.preventDefault();
  },
  'click #clearBudget': function () {
    Meteor.call('clearBudget', function () {
      Session.set('closingBalance', null);
      Session.set('fills', null);
    });
  }
});
