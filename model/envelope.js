Envelopes = new Meteor.Collection("envelope");

Envelopes.allow({
    insert: function (userId, doc) {
        return (userId && doc.owner === Meteor.userId() &&
        (Roles.userIsInRole(userId, "admin")) || Roles.userIsInRole(userId, "normal"));
    }
});

Envelope = function (name) {
    this._name = name;
};

Envelope.prototype = {
    get id() {
        return this._id;
    },
    get name() {
        return this._name;
    },
    save: function (callback) {
        // remember the context since in callback it is changed
        var that = this;
        var doc = {
            name: this._name,
        };

        Envelopes.insert(doc, function (error, result) {
            that._id = result;
            if (callback) {
                callback(error, result);
            }
        });
    }
};
