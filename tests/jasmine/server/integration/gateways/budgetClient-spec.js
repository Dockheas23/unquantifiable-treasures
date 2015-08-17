describe('Budget client', function () {

    it('should create budget', function () {
        var budgetClient = new BudgetClient();

        budgetClient.createBudget({
            budgetRequest: {income: [], demands: [], balance: 8948},
            userId: "testUserId"
        });

        var result = budgetClient.getLatestBudget({userId: "testUserId"});

        expect(result.closingBalance).toBe(8948);
        expect(result.fills.length).toBe(0);
    });

});
