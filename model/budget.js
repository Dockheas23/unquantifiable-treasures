Budgets = new Meteor.Collection("budgets");

Budgets.allow({
    insert: function (userId, doc) {
        return (userId && doc.owner === Meteor.userId() &&
        (Roles.userIsInRole(userId, "admin")) || Roles.userIsInRole(userId, "normal"));
    }
});

Budget = function (name, owner) {
    this._name = name;
    this._owner = owner;
};

Budget.prototype = {
    get id() {
        // readonly
        return this._id;
    },
    get owner() {
        // readonly
        return this._owner;
    },
    get name() {
        return this._name;
    },
    set name(value) {
        this._name = value;
    },
    save: function (callback) {
        // remember the context since in callback it is changed
        var that = this;
        var doc = {name: this.name, owner: Meteor.userId()};

        Budgets.insert(doc, function (error, result) {
            that._id = result;
            if (callback) {
                callback(error, result);
            }
        });
    }
};