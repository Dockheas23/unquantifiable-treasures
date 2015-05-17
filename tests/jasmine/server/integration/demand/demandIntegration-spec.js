"use strict";
describe("Demand", function () {

    it("should be created with id and owner", function () {
        var demandId = '1';
        var owner = 'test';
        var envelope = new Envelope("envelope");
        var demand = new Demand(envelope, 100, owner);

        spyOn(Demands, "insert").and.callFake(function (doc, callback) {
            // simulate async return of id = "1";
            callback(null, demandId);
        });

        demand.save();

        // id should be defined
        expect(demand.id).toEqual(demandId);

        expect(Demands.insert).toHaveBeenCalledWith({
            envelope: envelope,
            amount: 100,
            owner: owner
        }, jasmine.any(Function));

    });

});
