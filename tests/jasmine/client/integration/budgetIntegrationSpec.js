"use strict";
describe("Budget", function () {
    it("a user can create a budget", function (done) {
        // login to system and wait for callback
        Meteor.loginWithPassword("normal@test.com", "normal22", function (err) {
            // check if we have correctly logged in the system
            expect(err).toBeUndefined();

            // create a new budget
            var budget = new Budget();

            // save the budget and use callback function to check for existence
            var id = budget.save(function (error, result) {
                expect(error).toBeUndefined();

                // delete created tutorial
                Budgets.remove(result);

                Meteor.logout(function () {
                    done();
                })
            });
        });
    });
});
