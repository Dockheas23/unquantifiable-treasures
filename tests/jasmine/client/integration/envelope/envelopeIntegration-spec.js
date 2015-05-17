"use strict";
describe("Envelope", function () {
    it("a user can create an envelope", function (done) {
        // login to system and wait for callback
        Meteor.loginWithPassword("normal@test.com", "normal22", function (err) {
            // check if we have correctly logged in the system
            expect(err).toBeUndefined();
            var envelope = new Envelope('test');

            envelope.save(function (error, result) {
                expect(error).toBeUndefined();
                Envelopes.remove(result, function (err) {
                    Meteor.logout(function () {
                        done(err);
                    });
                });
            });
        });
    });
});
