"use strict";
describe("Envelope", function () {

    it("should be created with id and owner", function () {
        var envelopeId = '1';
        var owner = 'test';
        var envelope = new Envelope("envelope", owner);

        spyOn(Envelopes, "insert").and.callFake(function (doc, callback) {
            // simulate async return of id = "1";
            callback(null, envelopeId);
        });

        envelope.save();

        // id should be defined
        expect(envelope.id).toEqual(envelopeId);

        expect(Envelopes.insert).toHaveBeenCalledWith({name: 'envelope', owner: owner}, jasmine.any(Function));

    });

});
