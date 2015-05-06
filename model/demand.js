Demands = new Meteor.Collection("demand");

Demands.allow({
    insert: function (userId, doc) {
        return (userId && doc.owner === Meteor.userId() &&
        (Roles.userIsInRole(userId, "admin")) || Roles.userIsInRole(userId, "normal"));
    }
});

Demand = function (budget, envelope, amount) {
    this._budget = budget;
    this._envelope = envelope;
    this._amount = amount;
};

Demand.prototype = {
    get id() {
        return this._id;
    },
    get amount() {
        return this._amount;
    },
    get budget() {
        return this._budget;
    },
    get envelope() {
        return this._envelope;
    },
    save: function (callback) {
        // remember the context since in callback it is changed
        var that = this;
        var doc = {
            amount: this._amount,
            budget: this._budget,
            envelope: this._envelope,
        };

        Demands.insert(doc, function (error, result) {
            that._id = result;
            if (callback) {
                callback(error, result);
            }
        });
    }
};
