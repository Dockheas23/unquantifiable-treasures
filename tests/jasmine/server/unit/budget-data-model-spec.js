/**
 * Some unit testing on the model
 */

"use strict";
describe("Budget", function () {
    it("should be created with id and owner", function () {
        var budgetName = 'myBudget';
        var budgetId = '1';

        spyOn(Budgets, "insert").and.callFake(function (doc, callback) {
            // simulate async return of id = "1";
            callback(null, budgetId);
        });

        var budget = new Budget(budgetName);
        expect(budget.name).toBe(budgetName);
        budget.save();

        // id should be defined
        expect(budget.id).toEqual(budgetId);

        expect(Budgets.insert).toHaveBeenCalledWith({name: budgetName, owner: null}, jasmine.any(Function));

    });
});
