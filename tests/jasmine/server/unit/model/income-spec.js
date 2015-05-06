describe('Income', function() {

    it('should be created with values set properly', function() {
        var budget = new Budget("budget");
        var income = new Income(budget, "date", 100);

        expect(income.budget).toBe(budget);
        expect(income.date).toBe("date");
        expect(income.amount).toBe(100);
    });

});
