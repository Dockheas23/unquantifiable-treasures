Session.setDefault("message", '');

Template.home.helpers({
    message: function () {
        return Session.get("message");
    }
});

Template.home.events({
    'click button': function () {
        Session.set("message", 'You can fuck off');
    }
});


