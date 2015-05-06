describe('Fill', function() {

    it('should be created with values set properly', function() {
        var budget = new Budget("budget");
        var envelope = new Envelope("envelope");
        var demand = new Demand(budget, envelope, 100);
        var fill = new Fill(demand, "date", 50);

        expect(fill.demand).toBe(demand);
        expect(fill.demand.amount).toBe(100);
        expect(fill.date).toBe("date");
        expect(fill.amount).toBe(50);
    });

});
