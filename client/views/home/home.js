Template.home.onRendered(function() {
    $('.date').datepicker({ dateFormat: 'yy-mm-dd' });
});

Template.home.helpers({
    demands: function() {
        return Demands.find({owner: Meteor.userId()});
    },
    incomes: function() {
        return Incomes.find({owner: Meteor.userId()});
    },
    envelopes: function() {
        return Envelopes.find({owner: Meteor.userId()});
    },
    fills: function() {
        return Session.get("fills");
    },
    closingBalance: function() {
        return Session.get("closingBalance");
    }
});

function getDateString(date) {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}

function getBudgetRequest(balance) {
    budgetRequest = {balance: balance, income: [], demands: []};
    Demands.find({}).forEach(function(demand) {
        budgetRequest.demands.push(
                {
                    period: {start: getDateString(demand.date)},
                    envelope: demand.envelope.name,
                    amount: Number(demand.amount)
                });
    });
    Incomes.find({}).forEach(function(income) {
        budgetRequest.income.push(
                {
                    date: getDateString(income.date),
                    amount: Number(income.amount)
                });
    });
    return budgetRequest;
}

Template.home.events({
    'submit .run-budget': function (event) {
        var balance = Number(event.target.openingBalance.value) || 0
        Meteor.call('getFills', {budgetRequest: getBudgetRequest(balance)},
                function (err, result) {
                    Session.set("closingBalance", result.balance);
                    Session.set("fills", result.fills);
                });
        event.preventDefault();
    },
    'submit .new-demand': function (event) {
        var envelopeId = event.target.envelope.value;
        var demandDate = event.target.demandDate.value;
        var amount = event.target.demandAmount.value;
        Demands.insert({
            envelope: Envelopes.findOne({_id: envelopeId}),
            date: new Date(demandDate),
            amount: Number(amount),
            owner: Meteor.userId()
        });
        event.target.demandAmount.value = '';
        return false;
    },
    'submit .new-income': function (event) {
        var incomeDate = event.target.incomeDate.value;
        var amount = event.target.incomeAmount.value;
        Incomes.insert({
            date: new Date(incomeDate),
            amount: Number(amount),
            owner: Meteor.userId()
        });
        event.target.incomeDate.value = '';
        event.target.incomeAmount.value = '';
        return false;
    },
    'submit .new-envelope': function (event) {
        var envelopeName = event.target.envelopeName.value;
        Envelopes.insert({
            name: envelopeName,
            owner: Meteor.userId()
        });
        event.target.envelopeName.value = '';
        return false;
    },
    'click .delete-demand': function (event) {
        var demandId = event.target.attributes['data-button'].value;
        Demands.remove({_id: demandId});
    },
    'click .delete-envelope': function (event) {
        var envelopeId = event.target.attributes['data-button'].value;
        Envelopes.remove({_id: envelopeId});
    },
    'click .delete-income': function (event) {
        var incomeId = event.target.attributes['data-button'].value;
        Incomes.remove({_id: incomeId});
    },
    'click #clearBudget': function () {
        Meteor.call('clearBudget', function (err, result) {
            console.log('Clear budget complete');
        });
    }
});
