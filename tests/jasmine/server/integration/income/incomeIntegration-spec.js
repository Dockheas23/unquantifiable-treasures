"use strict";
describe("Income", function () {

    it("should be created with id and owner", function () {
        var incomeId = '1';
        var owner = 'test';
        var income = new Income('date', 100, owner);

        spyOn(Incomes, "insert").and.callFake(function (doc, callback) {
            // simulate async return of id = "1";
            callback(null, incomeId);
        });

        income.save();

        // id should be defined
        expect(income.id).toEqual(incomeId);

        expect(Incomes.insert).toHaveBeenCalledWith({date: 'date', amount: 100, owner: owner}, jasmine.any(Function));

    });

});
