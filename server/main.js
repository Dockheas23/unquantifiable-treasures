Meteor.methods({
    /**
     * Accepts an array of incomes, an array of demands and an opening balance.
     * These are properties of the args object.
     *
     * @param args {incomes, demands, balance}
     * @returns {{balance, fills}}
     */
    getFills: function (args) {
        var fillClient = new FillClient();
        return fillClient.getFills(args);
    },

    clearBudget: function () {
        Demands.remove({owner: Meteor.userId()});
        Envelopes.remove({owner: Meteor.userId()});
        Incomes.remove({owner: Meteor.userId()});
    }

});
