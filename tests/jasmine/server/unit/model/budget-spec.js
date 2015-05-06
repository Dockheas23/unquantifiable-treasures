describe('Budget', function() {

    it('should be created with values set properly', function() {
        var budget = new Budget("budget");

        expect(budget.name).toBe("budget");
    });

});
