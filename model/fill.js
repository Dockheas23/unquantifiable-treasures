Fills = new Meteor.Collection("fill");

Fills.allow({
    insert: function (userId, doc) {
        return (userId && doc.owner === Meteor.userId() &&
        (Roles.userIsInRole(userId, "admin")) || Roles.userIsInRole(userId, "normal"));
    }
});

Fill = function (demand, date, amount) {
    this._demand = demand;
    this._date = date;
    this._amount = amount;
};

Fill.prototype = {
    get id() {
        return this._id;
    },
    get amount() {
        return this._amount;
    },
    get demand() {
        return this._demand;
    },
    get date() {
        return this._date;
    },
    save: function (callback) {
        // remember the context since in callback it is changed
        var that = this;
        var doc = {
            amount: this._amount,
            demand: this._demand,
            date: this._date,
        };

        Fills.insert(doc, function (error, result) {
            that._id = result;
            if (callback) {
                callback(error, result);
            }
        });
    }
};
