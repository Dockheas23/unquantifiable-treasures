Demands = new Meteor.Collection("demand");

Demands.allow({
    insert: function (userId, doc) {
        return (userId && doc.owner === Meteor.userId() &&
                (Roles.userIsInRole(userId, "admin")) || Roles.userIsInRole(userId, "normal"));
    },
    remove: function (userId, doc) {
        return doc.owner === userId;
    }
});

Demand = function (envelope, amount, owner) {
    this._envelope = envelope;
    this._amount = amount;
    this._owner = owner;
};

Demand.prototype = {
    get id() {
        return this._id;
    },
    get amount() {
        return this._amount;
    },
    get envelope() {
        return this._envelope;
    },
    get owner() {
        return this._owner;
    },
    save: function (callback) {
        // remember the context since in callback it is changed
        var that = this;
        var doc = {
            amount: this._amount,
            envelope: this._envelope,
            owner: this._owner
        };

        Demands.insert(doc, function (error, result) {
            that._id = result;
            if (callback) {
                callback(error, result);
            }
        });
    }
};
