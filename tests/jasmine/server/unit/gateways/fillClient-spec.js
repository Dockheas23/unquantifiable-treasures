describe('Fill client', function () {

    it('should get fills', function () {
        var fillClient = new FillClient();

        var result = fillClient.getFills();

        expect(result.balance).toBe(8948);
        expect(result.fills.length).toBe(1);
    });

});
