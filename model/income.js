Incomes = new Meteor.Collection("income");

Incomes.allow({
    insert: function (userId, doc) {
        return (userId && doc.owner === Meteor.userId() &&
        (Roles.userIsInRole(userId, "admin")) || Roles.userIsInRole(userId, "normal"));
    }
});

Income = function (budget, date, amount) {
    this._budget = budget;
    this._date = date;
    this._amount = amount;
};

Income.prototype = {
    get id() {
        return this._id;
    },
    get amount() {
        return this._amount;
    },
    get budget() {
        return this._budget;
    },
    get date() {
        return this._date;
    },
    save: function (callback) {
        // remember the context since in callback it is changed
        var that = this;
        var doc = {
            amount: this._amount,
            budget: this._budget,
            date: this._date,
        };

        Incomes.insert(doc, function (error, result) {
            that._id = result;
            if (callback) {
                callback(error, result);
            }
        });
    }
};
