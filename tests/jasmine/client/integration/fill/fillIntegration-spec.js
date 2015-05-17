"use strict";
describe("Fills", function () {
    it("a user can create a fill", function (done) {
        // login to system and wait for callback
        Meteor.loginWithPassword("normal@test.com", "normal22", function (err) {
            // check if we have correctly logged in the system
            expect(err).toBeUndefined();
            var envelope = new Envelope('test');
            var demand = new Demand(envelope, 100);
            var fill = new Fill(demand, 'date', 100, 'normal@test.com');

            fill.save(function (error, result) {
                expect(error).toBeUndefined();
                Fills.remove(result, function (err) {
                    Meteor.logout(function () {
                        done();
                    })
                });
            });
        });
    });
});
