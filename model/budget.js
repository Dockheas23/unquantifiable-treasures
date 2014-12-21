Budgets = new Meteor.Collection("budgets");

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
    save: function () {
        // remember the context since in callback it is changed
        var that = this;
        var doc = {name: this.name};

        Budgets.insert(doc, function (error, result) {
            that._id = result;
        });
    }
};