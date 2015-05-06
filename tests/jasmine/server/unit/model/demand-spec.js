describe('Demand', function() {

    it('should be created with values set properly', function() {
        var budget = new Budget("budget");
        var envelope = new Envelope("envelope");
        var demand = new Demand(budget, envelope, 100);

        expect(demand.budget).toBe(budget);
        expect(demand.envelope).toBe(envelope);
        expect(demand.amount).toBe(100);
    });

});
