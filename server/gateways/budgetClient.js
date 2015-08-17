var endpoint = 'http://localhost:8080';

BudgetClient = function (args) {
  if (args) {
    this._endpoint = args.endpoint || endpoint;
  } else {
    this._endpoint = endpoint;
  }
};


/**
 * Sends a request ot the fill service to calculate and populate fills based on the income, demands and
 * opening balance provided in request.
 *
 * @param args
 * @returns {{balance: number, fills: *[]}}
 */
BudgetClient.prototype.createBudget = function (args) {

  /**
   Example request:

   budgetRequest: {
                income: [{
                    date: "2015-03-01",
                    amount: 2222
                }],
                demands: [{
                    envelope: "",
                    amount: 1111,
                    period: {
                        start: "2015-03-05",
                        end: "" // Optional
                    }
                }],
                balance: 11111 // income to this date (user input)
            }

   */

  var result = HTTP.post(this._endpoint + '/budgets', {
    data: args.budgetRequest,
    headers: {"Authorization": args.userId}
  });
  return result.data;
};

BudgetClient.prototype.getLatestBudget = function (args) {
  var result = HTTP.get(this._endpoint + '/budgets/latest',
    {
      headers: {"Authorization": args.userId}
    });
  return result.data;
};
