describe('Income', function() {

    it('should be created with values set properly', function() {
        var income = new Income("date", 100);

        expect(income.date).toBe("date");
        expect(income.amount).toBe(100);
    });

});
