Incomes = new Meteor.Collection("income");

Incomes.allow({
    insert: function (userId, doc) {
        return (userId && doc.owner === Meteor.userId() &&
        (Roles.userIsInRole(userId, "admin")) || Roles.userIsInRole(userId, "normal"));
    },
    remove: function (userId, doc) {
        return doc.owner === userId;
    }
});

Income = function (date, amount, owner) {
    this._date = date;
    this._amount = amount;
    this._owner = owner;
};

Income.prototype = {
    get id() {
        return this._id;
    },
    get amount() {
        return this._amount;
    },
    get date() {
        return this._date;
    },
    get owner() {
        return this._owner;
    },
    save: function (callback) {
        // remember the context since in callback it is changed
        var that = this;
        var doc = {
            amount: this._amount,
            date: this._date,
            owner: this._owner
        };

        Incomes.insert(doc, function (error, result) {
            that._id = result;
            if (callback) {
                callback(error, result);
            }
        });
    }
};
