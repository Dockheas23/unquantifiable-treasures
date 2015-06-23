describe('Fill client', function () {

    it('should get fills', function () {
        var fillClient = new FillClient();

        var result = fillClient.getFills(
                {
                    budgetRequest: {income: [], demands: [], balance: 8948},
                    userId: "testUserId"
                });

        expect(result.closingBalance).toBe(8948);
        expect(result.fills.length).toBe(0);
    });

});
