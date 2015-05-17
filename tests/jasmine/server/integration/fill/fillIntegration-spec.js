"use strict";
describe("Fill", function () {

    it("should be created with id and owner", function () {
        var fillId = '1';
        var owner = 'test';

        var envelope = new Envelope('envelope', owner);
        var demand = new Demand(envelope, 100, owner);
        var fill = new Fill(demand, 'date', 100, owner);

        spyOn(Fills, "insert").and.callFake(function (doc, callback) {
            // simulate async return of id = "1";
            callback(null, fillId);
        });

        fill.save();

        // id should be defined
        expect(fill.id).toEqual(fillId);

        expect(Fills.insert).toHaveBeenCalledWith({
            demand: demand,
            date: 'date',
            amount: 100,
            owner: owner
        }, jasmine.any(Function));

    });

});
