"use strict";
describe("Income", function () {
    it("a user can create an income", function (done) {
        Meteor.loginWithPassword("normal@test.com", "normal22", function (err) {
            expect(err).toBeUndefined();
            var income = new Income('date', 100, 'normal@test.com');

            income.save(function (error, result) {
                expect(error).toBeUndefined();
                Incomes.remove(result, function (err) {
                    Meteor.logout(function () {
                        done(err);
                    });
                });
            });
        });
    });
});
