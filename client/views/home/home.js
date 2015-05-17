Session.setDefault("message", '');

Template.home.onRendered(function() {
    $('.date').datepicker({ dateFormat: 'yy-mm-dd' });
});

Template.home.helpers({
    message: function () {
        return Session.get("message");
    },
    demands: function() {
        return Demands.find({});
    },
    incomes: function() {
        return Incomes.find({});
    },
    envelopes: function() {
        return Envelopes.find({});
    },
});

Template.home.events({
    'click button': function () {
        Session.set("message", 'You can fuck off');
    },
    'submit .new-demand': function (event) {
        var envelopeId = event.target.envelope.value;
        var demandDate = event.target.demandDate.value;
        var amount = event.target.demandAmount.value;
        Demands.insert({
            envelope: Envelopes.findOne({_id: envelopeId}),
            date: new Date(demandDate),
            amount: amount
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
            amount: amount
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
    }
});
