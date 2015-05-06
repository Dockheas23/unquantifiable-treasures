describe('Envelope', function() {

    it('should be created with name set properly', function() {
        var envelope = new Envelope("envelope");

        expect(envelope.name).toBe("envelope");
    });

});
