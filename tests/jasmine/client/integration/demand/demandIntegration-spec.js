"use strict";
describe("Demand", function () {
    it("a user can create a demand", function (done) {
        // login to system and wait for callback
        Meteor.loginWithPassword("normal@test.com", "normal22", function (err) {
            expect(err).toBeUndefined();

            var envelope = new Envelope('test');
            var demand = new Demand(envelope, 100);

            demand.save(function (error, result) {
                expect(error).toBeUndefined();
                Demands.remove(result, function (err) {
                    Meteor.logout(function () {
                        done(err);
                    })
                });
            });
        });
    });
});
