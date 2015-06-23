'use strict';

function getDateString(date) {
    return date.toISOString().slice(0, 10);
}

function getBudgetRequest(balance) {
    var budgetRequest = {balance: balance, income: [], demands: []};
    Demands.find({}).forEach(function (demand) {
        budgetRequest.demands.push({
            period: {start: getDateString(demand.date)},
            envelope: demand.envelope.name,
            amount: Number(demand.amount)
        });
    });
    Incomes.find({}).forEach(function (income) {
        budgetRequest.income.push({
            date: getDateString(income.date),
            amount: Number(income.amount)
        });
    });
    return budgetRequest;
}


Template.budgetTemplate.helpers({
    fills: function () {
        return Session.get('fills');
    },
    closingBalance: function () {
        return Session.get('closingBalance');
    }
});


Template.home.events({
    'submit .run-budget': function (event) {
        var balance = Number(event.target.openingBalance.value) || 0;
        Meteor.call('getFills', {
            budgetRequest: getBudgetRequest(balance),
            userId: Meteor.userId()
        },
        function (err, result) {
            Session.set({
                closingBalance: result.closingBalance,
                fills: result.fills
            });
        });
        return false;
    },
    'click #clearBudget': function () {
        Meteor.call('clearBudget', function () {
            Session.set({closingBalance: null, fills: null});
        });
    }
});
