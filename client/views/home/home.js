Template.home.onRendered(function() {
    $('.date').datepicker({ dateFormat: 'yy-mm-dd' });
});

Template.home.helpers({
    demands: function() {
        return Demands.find({});
    },
    incomes: function() {
        return Incomes.find({});
    },
    envelopes: function() {
        return Envelopes.find({});
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
    'submit .make-budget': function (event) {
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
            amount: Number(amount)
        });
        event.target.demandAmount.value = '';
        return false;
    },
    'submit .new-income': function (event) {
        console.log(event);
        var incomeDate = event.target.incomeDate.value;
        var amount = event.target.incomeAmount.value;
        Incomes.insert({
            date: new Date(incomeDate),
            amount: Number(amount)
        });
        event.target.incomeDate.value = '';
        event.target.incomeAmount.value = '';
        return false;
    },
    'submit .new-envelope': function (event) {
        var envelopeName = event.target.envelopeName.value;
        Envelopes.insert({
            name: envelopeName
        });
        event.target.envelopeName.value = '';
        return false;
    },
    'click #clearBudget': function () {
        console.log("HEYO");
        Incomes.remove({});
        Demands.remove({});
    }
});
