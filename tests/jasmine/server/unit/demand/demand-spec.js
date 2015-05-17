describe('Demand', function() {

    it('should be created with values set properly', function() {
        var envelope = new Envelope("envelope");
        var demand = new Demand(envelope, 100);

        expect(demand.envelope).toBe(envelope);
        expect(demand.amount).toBe(100);
    });

});
