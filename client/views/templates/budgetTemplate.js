'use strict';

function getDateString(date) {
    return date.toISOString().slice(0, 10);
}

function getBudgetRequest(balance) {
    var budgetRequest = {balance: balance, income: [], demands: []};
    Demands.find({owner: Meteor.userId()}).forEach(function (demand) {
        budgetRequest.demands.push({
            period: {start: getDateString(demand.date)},
            envelope: demand.envelope.name,
            amount: Number(demand.amount)
        });
    });
    Incomes.find({owner: Meteor.userId()}).forEach(function (income) {
        budgetRequest.income.push({
            date: getDateString(income.date),
            amount: Number(income.amount)
        });
    });
    return budgetRequest;
}

Template.budgetTemplate.onCreated(function() {
    Meteor.call('getLatestBudget', {userId: Meteor.userId()},
            function (err, result) {
                Session.set("budget", result);
                console.log(result);
            });
});

Template.budgetTemplate.helpers({
    budget: function () {
        return Session.get('budget');
    },
    budgetString: function () {
        return JSON.stringify(Session.get('budget'), null, '    ');
    }
});


Template.home.events({
    'submit .run-budget': function (event) {
        var balance = Number(event.target.openingBalance.value) || 0;
        Meteor.call('createBudget', {
            budgetRequest: getBudgetRequest(balance),
            userId: Meteor.userId()
        },
        function (err, result) {
            Session.set("budget", result);
        });
        return false;
    },
    'click #clearBudget': function () {
        Meteor.call('clearBudget', function () {
            Session.set("budget", null);
        });
    }
});
