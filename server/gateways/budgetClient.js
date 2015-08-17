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
  //var result = HTTP.get(this._endpoint + '/budgets/latest',
  //  {
  //    headers: {"Authorization": args.userId}
  //  });
  //return result.data;

  return {
    "openingBalance": 2360,
    "closingBalance": 0,
    "income": [],
    "fills": [
      {
        "amount": 100,
        "date": "2015-06-24T20:42:18.641000000000Z",
        "demandPeriod": {
          "start": "2015-06-26T00:00:00.000000000000Z",
          "end": "2015-06-26T00:00:00.000000000000Z"
        },
        "envelope": "Misc"
      },
      {
        "amount": 40,
        "date": "2015-06-24T20:42:18.641000000000Z",
        "demandPeriod": {
          "start": "2015-06-26T00:00:00.000000000000Z",
          "end": "2015-06-26T00:00:00.000000000000Z"
        },
        "envelope": "Petrol"
      },
      {
        "amount": 50,
        "date": "2015-06-24T20:42:18.641000000000Z",
        "demandPeriod": {
          "start": "2015-06-29T00:00:00.000000000000Z",
          "end": "2015-06-29T00:00:00.000000000000Z"
        },
        "envelope": "Groceries"
      },
      {
        "amount": 150,
        "date": "2015-06-24T20:42:18.641000000000Z",
        "demandPeriod": {
          "start": "2015-07-03T00:00:00.000000000000Z",
          "end": "2015-07-03T00:00:00.000000000000Z"
        },
        "envelope": "Misc"
      },
      {
        "amount": 50,
        "date": "2015-06-24T20:42:18.641000000000Z",
        "demandPeriod": {
          "start": "2015-07-06T00:00:00.000000000000Z",
          "end": "2015-07-06T00:00:00.000000000000Z"
        },
        "envelope": "Groceries"
      },
      {
        "amount": 150,
        "date": "2015-06-24T20:42:18.641000000000Z",
        "demandPeriod": {
          "start": "2015-07-10T00:00:00.000000000000Z",
          "end": "2015-07-10T00:00:00.000000000000Z"
        },
        "envelope": "Misc"
      },
      {
        "amount": 50,
        "date": "2015-06-24T20:42:18.641000000000Z",
        "demandPeriod": {
          "start": "2015-07-10T00:00:00.000000000000Z",
          "end": "2015-07-10T00:00:00.000000000000Z"
        },
        "envelope": "Petrol"
      },
      {
        "amount": 50,
        "date": "2015-06-24T20:42:18.641000000000Z",
        "demandPeriod": {
          "start": "2015-07-13T00:00:00.000000000000Z",
          "end": "2015-07-13T00:00:00.000000000000Z"
        },
        "envelope": "Groceries"
      },
      {
        "amount": 65,
        "date": "2015-06-24T20:42:18.641000000000Z",
        "demandPeriod": {
          "start": "2015-07-15T00:00:00.000000000000Z",
          "end": "2015-07-15T00:00:00.000000000000Z"
        },
        "envelope": "Electricity"
      },
      {
        "amount": 40,
        "date": "2015-06-24T20:42:18.641000000000Z",
        "demandPeriod": {
          "start": "2015-07-15T00:00:00.000000000000Z",
          "end": "2015-07-15T00:00:00.000000000000Z"
        },
        "envelope": "Gas"
      },
      {
        "amount": 800,
        "date": "2015-06-24T20:42:18.641000000000Z",
        "demandPeriod": {
          "start": "2015-07-15T00:00:00.000000000000Z",
          "end": "2015-07-15T00:00:00.000000000000Z"
        },
        "envelope": "Rent"
      },
      {
        "amount": 150,
        "date": "2015-06-24T20:42:18.641000000000Z",
        "demandPeriod": {
          "start": "2015-07-17T00:00:00.000000000000Z",
          "end": "2015-07-17T00:00:00.000000000000Z"
        },
        "envelope": "Misc"
      },
      {
        "amount": 50,
        "date": "2015-06-24T20:42:18.641000000000Z",
        "demandPeriod": {
          "start": "2015-07-20T00:00:00.000000000000Z",
          "end": "2015-07-20T00:00:00.000000000000Z"
        },
        "envelope": "Groceries"
      },
      {
        "amount": 250,
        "date": "2015-06-24T20:42:18.641000000000Z",
        "demandPeriod": {
          "start": "2015-07-20T00:00:00.000000000000Z",
          "end": "2015-07-20T00:00:00.000000000000Z"
        },
        "envelope": "Credit Union"
      },
      {
        "amount": 60,
        "date": "2015-06-24T20:42:18.641000000000Z",
        "demandPeriod": {
          "start": "2015-07-21T00:00:00.000000000000Z",
          "end": "2015-07-21T00:00:00.000000000000Z"
        },
        "envelope": "UPC"
      },
      {
        "amount": 150,
        "date": "2015-06-24T20:42:18.641000000000Z",
        "demandPeriod": {
          "start": "2015-07-24T00:00:00.000000000000Z",
          "end": "2015-07-24T00:00:00.000000000000Z"
        },
        "envelope": "Misc"
      },
      {
        "amount": 50,
        "date": "2015-06-24T20:42:18.641000000000Z",
        "demandPeriod": {
          "start": "2015-07-24T00:00:00.000000000000Z",
          "end": "2015-07-24T00:00:00.000000000000Z"
        },
        "envelope": "Petrol"
      },
      {
        "amount": 50,
        "date": "2015-06-24T20:42:18.641000000000Z",
        "demandPeriod": {
          "start": "2015-07-27T00:00:00.000000000000Z",
          "end": "2015-07-27T00:00:00.000000000000Z"
        },
        "envelope": "Groceries"
      },
      {
        "amount": 55,
        "date": "2015-06-24T20:42:18.641000000000Z",
        "demandPeriod": {
          "start": "2015-07-31T00:00:00.000000000000Z",
          "end": "2015-07-31T00:00:00.000000000000Z"
        },
        "envelope": "Misc"
      }
    ],
    "userId": "qtvSdwryEKTaxkwfn",
    "demands": [
      {
        "amount": 800,
        "period": {
          "start": "2015-07-15T00:00:00.000000000000Z",
          "end": "2015-07-15T00:00:00.000000000000Z"
        },
        "envelope": "Rent"
      },
      {
        "amount": 800,
        "period": {
          "start": "2015-08-15T00:00:00.000000000000Z",
          "end": "2015-08-15T00:00:00.000000000000Z"
        },
        "envelope": "Rent"
      },
      {
        "amount": 800,
        "period": {
          "start": "2015-09-15T00:00:00.000000000000Z",
          "end": "2015-09-15T00:00:00.000000000000Z"
        },
        "envelope": "Rent"
      },
      {
        "amount": 40,
        "period": {
          "start": "2015-08-21T00:00:00.000000000000Z",
          "end": "2015-08-21T00:00:00.000000000000Z"
        },
        "envelope": "Water"
      },
      {
        "amount": 40,
        "period": {
          "start": "2015-11-20T00:00:00.000000000000Z",
          "end": "2015-11-20T00:00:00.000000000000Z"
        },
        "envelope": "Water"
      },
      {
        "amount": 60,
        "period": {
          "start": "2015-07-21T00:00:00.000000000000Z",
          "end": "2015-07-21T00:00:00.000000000000Z"
        },
        "envelope": "UPC"
      },
      {
        "amount": 60,
        "period": {
          "start": "2015-08-21T00:00:00.000000000000Z",
          "end": "2015-08-21T00:00:00.000000000000Z"
        },
        "envelope": "UPC"
      },
      {
        "amount": 60,
        "period": {
          "start": "2015-09-21T00:00:00.000000000000Z",
          "end": "2015-09-21T00:00:00.000000000000Z"
        },
        "envelope": "UPC"
      },
      {
        "amount": 40,
        "period": {
          "start": "2015-07-15T00:00:00.000000000000Z",
          "end": "2015-07-15T00:00:00.000000000000Z"
        },
        "envelope": "Gas"
      },
      {
        "amount": 40,
        "period": {
          "start": "2015-08-14T00:00:00.000000000000Z",
          "end": "2015-08-14T00:00:00.000000000000Z"
        },
        "envelope": "Gas"
      },
      {
        "amount": 40,
        "period": {
          "start": "2015-09-14T00:00:00.000000000000Z",
          "end": "2015-09-14T00:00:00.000000000000Z"
        },
        "envelope": "Gas"
      },
      {
        "amount": 65,
        "period": {
          "start": "2015-07-15T00:00:00.000000000000Z",
          "end": "2015-07-15T00:00:00.000000000000Z"
        },
        "envelope": "Electricity"
      },
      {
        "amount": 65,
        "period": {
          "start": "2015-08-14T00:00:00.000000000000Z",
          "end": "2015-08-14T00:00:00.000000000000Z"
        },
        "envelope": "Electricity"
      },
      {
        "amount": 65,
        "period": {
          "start": "2015-09-15T00:00:00.000000000000Z",
          "end": "2015-09-15T00:00:00.000000000000Z"
        },
        "envelope": "Electricity"
      },
      {
        "amount": 250,
        "period": {
          "start": "2015-07-20T00:00:00.000000000000Z",
          "end": "2015-07-20T00:00:00.000000000000Z"
        },
        "envelope": "Credit Union"
      },
      {
        "amount": 250,
        "period": {
          "start": "2015-08-20T00:00:00.000000000000Z",
          "end": "2015-08-20T00:00:00.000000000000Z"
        },
        "envelope": "Credit Union"
      },
      {
        "amount": 250,
        "period": {
          "start": "2015-09-21T00:00:00.000000000000Z",
          "end": "2015-09-21T00:00:00.000000000000Z"
        },
        "envelope": "Credit Union"
      },
      {
        "amount": 50,
        "period": {
          "start": "2015-06-29T00:00:00.000000000000Z",
          "end": "2015-06-29T00:00:00.000000000000Z"
        },
        "envelope": "Groceries"
      },
      {
        "amount": 50,
        "period": {
          "start": "2015-07-06T00:00:00.000000000000Z",
          "end": "2015-07-06T00:00:00.000000000000Z"
        },
        "envelope": "Groceries"
      },
      {
        "amount": 50,
        "period": {
          "start": "2015-07-13T00:00:00.000000000000Z",
          "end": "2015-07-13T00:00:00.000000000000Z"
        },
        "envelope": "Groceries"
      },
      {
        "amount": 50,
        "period": {
          "start": "2015-07-20T00:00:00.000000000000Z",
          "end": "2015-07-20T00:00:00.000000000000Z"
        },
        "envelope": "Groceries"
      },
      {
        "amount": 50,
        "period": {
          "start": "2015-07-27T00:00:00.000000000000Z",
          "end": "2015-07-27T00:00:00.000000000000Z"
        },
        "envelope": "Groceries"
      },
      {
        "amount": 50,
        "period": {
          "start": "2015-08-03T00:00:00.000000000000Z",
          "end": "2015-08-03T00:00:00.000000000000Z"
        },
        "envelope": "Groceries"
      },
      {
        "amount": 50,
        "period": {
          "start": "2015-08-10T00:00:00.000000000000Z",
          "end": "2015-08-10T00:00:00.000000000000Z"
        },
        "envelope": "Groceries"
      },
      {
        "amount": 50,
        "period": {
          "start": "2015-08-17T00:00:00.000000000000Z",
          "end": "2015-08-17T00:00:00.000000000000Z"
        },
        "envelope": "Groceries"
      },
      {
        "amount": 50,
        "period": {
          "start": "2015-08-24T00:00:00.000000000000Z",
          "end": "2015-08-24T00:00:00.000000000000Z"
        },
        "envelope": "Groceries"
      },
      {
        "amount": 50,
        "period": {
          "start": "2015-08-31T00:00:00.000000000000Z",
          "end": "2015-08-31T00:00:00.000000000000Z"
        },
        "envelope": "Groceries"
      },
      {
        "amount": 50,
        "period": {
          "start": "2015-09-07T00:00:00.000000000000Z",
          "end": "2015-09-07T00:00:00.000000000000Z"
        },
        "envelope": "Groceries"
      },
      {
        "amount": 50,
        "period": {
          "start": "2015-09-14T00:00:00.000000000000Z",
          "end": "2015-09-14T00:00:00.000000000000Z"
        },
        "envelope": "Groceries"
      },
      {
        "amount": 50,
        "period": {
          "start": "2015-09-21T00:00:00.000000000000Z",
          "end": "2015-09-21T00:00:00.000000000000Z"
        },
        "envelope": "Groceries"
      },
      {
        "amount": 50,
        "period": {
          "start": "2015-09-28T00:00:00.000000000000Z",
          "end": "2015-09-28T00:00:00.000000000000Z"
        },
        "envelope": "Groceries"
      },
      {
        "amount": 40,
        "period": {
          "start": "2015-06-26T00:00:00.000000000000Z",
          "end": "2015-06-26T00:00:00.000000000000Z"
        },
        "envelope": "Petrol"
      },
      {
        "amount": 50,
        "period": {
          "start": "2015-07-10T00:00:00.000000000000Z",
          "end": "2015-07-10T00:00:00.000000000000Z"
        },
        "envelope": "Petrol"
      },
      {
        "amount": 50,
        "period": {
          "start": "2015-07-24T00:00:00.000000000000Z",
          "end": "2015-07-24T00:00:00.000000000000Z"
        },
        "envelope": "Petrol"
      },
      {
        "amount": 100,
        "period": {
          "start": "2015-06-26T00:00:00.000000000000Z",
          "end": "2015-06-26T00:00:00.000000000000Z"
        },
        "envelope": "Misc"
      },
      {
        "amount": 150,
        "period": {
          "start": "2015-07-03T00:00:00.000000000000Z",
          "end": "2015-07-03T00:00:00.000000000000Z"
        },
        "envelope": "Misc"
      },
      {
        "amount": 150,
        "period": {
          "start": "2015-07-10T00:00:00.000000000000Z",
          "end": "2015-07-10T00:00:00.000000000000Z"
        },
        "envelope": "Misc"
      },
      {
        "amount": 150,
        "period": {
          "start": "2015-07-17T00:00:00.000000000000Z",
          "end": "2015-07-17T00:00:00.000000000000Z"
        },
        "envelope": "Misc"
      },
      {
        "amount": 150,
        "period": {
          "start": "2015-07-24T00:00:00.000000000000Z",
          "end": "2015-07-24T00:00:00.000000000000Z"
        },
        "envelope": "Misc"
      },
      {
        "amount": 150,
        "period": {
          "start": "2015-07-31T00:00:00.000000000000Z",
          "end": "2015-07-31T00:00:00.000000000000Z"
        },
        "envelope": "Misc"
      },
      {
        "amount": 150,
        "period": {
          "start": "2015-08-07T00:00:00.000000000000Z",
          "end": "2015-08-07T00:00:00.000000000000Z"
        },
        "envelope": "Misc"
      },
      {
        "amount": 150,
        "period": {
          "start": "2015-08-14T00:00:00.000000000000Z",
          "end": "2015-08-14T00:00:00.000000000000Z"
        },
        "envelope": "Misc"
      },
      {
        "amount": 150,
        "period": {
          "start": "2015-08-21T00:00:00.000000000000Z",
          "end": "2015-08-21T00:00:00.000000000000Z"
        },
        "envelope": "Misc"
      },
      {
        "amount": 150,
        "period": {
          "start": "2015-08-28T00:00:00.000000000000Z",
          "end": "2015-08-28T00:00:00.000000000000Z"
        },
        "envelope": "Misc"
      }
    ],
    "demandSummaries": [
      {
        "demand": {
          "amount": 100,
          "period": {
            "start": "2015-06-26T00:00:00.000000000000Z",
            "end": "2015-06-26T00:00:00.000000000000Z"
          },
          "envelope": "Misc"
        },
        "colour": "Green",
        "fillAmount": 100
      },
      {
        "demand": {
          "amount": 40,
          "period": {
            "start": "2015-06-26T00:00:00.000000000000Z",
            "end": "2015-06-26T00:00:00.000000000000Z"
          },
          "envelope": "Petrol"
        },
        "colour": "Green",
        "fillAmount": 40
      },
      {
        "demand": {
          "amount": 50,
          "period": {
            "start": "2015-06-29T00:00:00.000000000000Z",
            "end": "2015-06-29T00:00:00.000000000000Z"
          },
          "envelope": "Groceries"
        },
        "colour": "Green",
        "fillAmount": 50
      },
      {
        "demand": {
          "amount": 150,
          "period": {
            "start": "2015-07-03T00:00:00.000000000000Z",
            "end": "2015-07-03T00:00:00.000000000000Z"
          },
          "envelope": "Misc"
        },
        "colour": "Green",
        "fillAmount": 150
      },
      {
        "demand": {
          "amount": 50,
          "period": {
            "start": "2015-07-06T00:00:00.000000000000Z",
            "end": "2015-07-06T00:00:00.000000000000Z"
          },
          "envelope": "Groceries"
        },
        "colour": "Green",
        "fillAmount": 50
      },
      {
        "demand": {
          "amount": 150,
          "period": {
            "start": "2015-07-10T00:00:00.000000000000Z",
            "end": "2015-07-10T00:00:00.000000000000Z"
          },
          "envelope": "Misc"
        },
        "colour": "Green",
        "fillAmount": 150
      },
      {
        "demand": {
          "amount": 50,
          "period": {
            "start": "2015-07-10T00:00:00.000000000000Z",
            "end": "2015-07-10T00:00:00.000000000000Z"
          },
          "envelope": "Petrol"
        },
        "colour": "Green",
        "fillAmount": 50
      },
      {
        "demand": {
          "amount": 50,
          "period": {
            "start": "2015-07-13T00:00:00.000000000000Z",
            "end": "2015-07-13T00:00:00.000000000000Z"
          },
          "envelope": "Groceries"
        },
        "colour": "Green",
        "fillAmount": 50
      },
      {
        "demand": {
          "amount": 65,
          "period": {
            "start": "2015-07-15T00:00:00.000000000000Z",
            "end": "2015-07-15T00:00:00.000000000000Z"
          },
          "envelope": "Electricity"
        },
        "colour": "Green",
        "fillAmount": 65
      },
      {
        "demand": {
          "amount": 40,
          "period": {
            "start": "2015-07-15T00:00:00.000000000000Z",
            "end": "2015-07-15T00:00:00.000000000000Z"
          },
          "envelope": "Gas"
        },
        "colour": "Green",
        "fillAmount": 40
      },
      {
        "demand": {
          "amount": 800,
          "period": {
            "start": "2015-07-15T00:00:00.000000000000Z",
            "end": "2015-07-15T00:00:00.000000000000Z"
          },
          "envelope": "Rent"
        },
        "colour": "Green",
        "fillAmount": 800
      },
      {
        "demand": {
          "amount": 150,
          "period": {
            "start": "2015-07-17T00:00:00.000000000000Z",
            "end": "2015-07-17T00:00:00.000000000000Z"
          },
          "envelope": "Misc"
        },
        "colour": "Green",
        "fillAmount": 150
      },
      {
        "demand": {
          "amount": 50,
          "period": {
            "start": "2015-07-20T00:00:00.000000000000Z",
            "end": "2015-07-20T00:00:00.000000000000Z"
          },
          "envelope": "Groceries"
        },
        "colour": "Green",
        "fillAmount": 50
      },
      {
        "demand": {
          "amount": 250,
          "period": {
            "start": "2015-07-20T00:00:00.000000000000Z",
            "end": "2015-07-20T00:00:00.000000000000Z"
          },
          "envelope": "Credit Union"
        },
        "colour": "Green",
        "fillAmount": 250
      },
      {
        "demand": {
          "amount": 60,
          "period": {
            "start": "2015-07-21T00:00:00.000000000000Z",
            "end": "2015-07-21T00:00:00.000000000000Z"
          },
          "envelope": "UPC"
        },
        "colour": "Green",
        "fillAmount": 60
      },
      {
        "demand": {
          "amount": 150,
          "period": {
            "start": "2015-07-24T00:00:00.000000000000Z",
            "end": "2015-07-24T00:00:00.000000000000Z"
          },
          "envelope": "Misc"
        },
        "colour": "Green",
        "fillAmount": 150
      },
      {
        "demand": {
          "amount": 50,
          "period": {
            "start": "2015-07-24T00:00:00.000000000000Z",
            "end": "2015-07-24T00:00:00.000000000000Z"
          },
          "envelope": "Petrol"
        },
        "colour": "Green",
        "fillAmount": 50
      },
      {
        "demand": {
          "amount": 50,
          "period": {
            "start": "2015-07-27T00:00:00.000000000000Z",
            "end": "2015-07-27T00:00:00.000000000000Z"
          },
          "envelope": "Groceries"
        },
        "colour": "Green",
        "fillAmount": 50
      },
      {
        "demand": {
          "amount": 150,
          "period": {
            "start": "2015-07-31T00:00:00.000000000000Z",
            "end": "2015-07-31T00:00:00.000000000000Z"
          },
          "envelope": "Misc"
        },
        "colour": "Orange",
        "fillAmount": 55
      },
      {
        "demand": {
          "amount": 50,
          "period": {
            "start": "2015-08-03T00:00:00.000000000000Z",
            "end": "2015-08-03T00:00:00.000000000000Z"
          },
          "envelope": "Groceries"
        },
        "colour": "Red",
        "fillAmount": 0
      },
      {
        "demand": {
          "amount": 150,
          "period": {
            "start": "2015-08-07T00:00:00.000000000000Z",
            "end": "2015-08-07T00:00:00.000000000000Z"
          },
          "envelope": "Misc"
        },
        "colour": "Red",
        "fillAmount": 0
      },
      {
        "demand": {
          "amount": 50,
          "period": {
            "start": "2015-08-10T00:00:00.000000000000Z",
            "end": "2015-08-10T00:00:00.000000000000Z"
          },
          "envelope": "Groceries"
        },
        "colour": "Red",
        "fillAmount": 0
      },
      {
        "demand": {
          "amount": 150,
          "period": {
            "start": "2015-08-14T00:00:00.000000000000Z",
            "end": "2015-08-14T00:00:00.000000000000Z"
          },
          "envelope": "Misc"
        },
        "colour": "Red",
        "fillAmount": 0
      },
      {
        "demand": {
          "amount": 65,
          "period": {
            "start": "2015-08-14T00:00:00.000000000000Z",
            "end": "2015-08-14T00:00:00.000000000000Z"
          },
          "envelope": "Electricity"
        },
        "colour": "Red",
        "fillAmount": 0
      },
      {
        "demand": {
          "amount": 40,
          "period": {
            "start": "2015-08-14T00:00:00.000000000000Z",
            "end": "2015-08-14T00:00:00.000000000000Z"
          },
          "envelope": "Gas"
        },
        "colour": "Red",
        "fillAmount": 0
      },
      {
        "demand": {
          "amount": 800,
          "period": {
            "start": "2015-08-15T00:00:00.000000000000Z",
            "end": "2015-08-15T00:00:00.000000000000Z"
          },
          "envelope": "Rent"
        },
        "colour": "Red",
        "fillAmount": 0
      },
      {
        "demand": {
          "amount": 50,
          "period": {
            "start": "2015-08-17T00:00:00.000000000000Z",
            "end": "2015-08-17T00:00:00.000000000000Z"
          },
          "envelope": "Groceries"
        },
        "colour": "Red",
        "fillAmount": 0
      },
      {
        "demand": {
          "amount": 250,
          "period": {
            "start": "2015-08-20T00:00:00.000000000000Z",
            "end": "2015-08-20T00:00:00.000000000000Z"
          },
          "envelope": "Credit Union"
        },
        "colour": "Red",
        "fillAmount": 0
      },
      {
        "demand": {
          "amount": 150,
          "period": {
            "start": "2015-08-21T00:00:00.000000000000Z",
            "end": "2015-08-21T00:00:00.000000000000Z"
          },
          "envelope": "Misc"
        },
        "colour": "Red",
        "fillAmount": 0
      },
      {
        "demand": {
          "amount": 60,
          "period": {
            "start": "2015-08-21T00:00:00.000000000000Z",
            "end": "2015-08-21T00:00:00.000000000000Z"
          },
          "envelope": "UPC"
        },
        "colour": "Red",
        "fillAmount": 0
      },
      {
        "demand": {
          "amount": 40,
          "period": {
            "start": "2015-08-21T00:00:00.000000000000Z",
            "end": "2015-08-21T00:00:00.000000000000Z"
          },
          "envelope": "Water"
        },
        "colour": "Red",
        "fillAmount": 0
      },
      {
        "demand": {
          "amount": 50,
          "period": {
            "start": "2015-08-24T00:00:00.000000000000Z",
            "end": "2015-08-24T00:00:00.000000000000Z"
          },
          "envelope": "Groceries"
        },
        "colour": "Red",
        "fillAmount": 0
      },
      {
        "demand": {
          "amount": 150,
          "period": {
            "start": "2015-08-28T00:00:00.000000000000Z",
            "end": "2015-08-28T00:00:00.000000000000Z"
          },
          "envelope": "Misc"
        },
        "colour": "Red",
        "fillAmount": 0
      },
      {
        "demand": {
          "amount": 50,
          "period": {
            "start": "2015-08-31T00:00:00.000000000000Z",
            "end": "2015-08-31T00:00:00.000000000000Z"
          },
          "envelope": "Groceries"
        },
        "colour": "Red",
        "fillAmount": 0
      },
      {
        "demand": {
          "amount": 50,
          "period": {
            "start": "2015-09-07T00:00:00.000000000000Z",
            "end": "2015-09-07T00:00:00.000000000000Z"
          },
          "envelope": "Groceries"
        },
        "colour": "Red",
        "fillAmount": 0
      },
      {
        "demand": {
          "amount": 50,
          "period": {
            "start": "2015-09-14T00:00:00.000000000000Z",
            "end": "2015-09-14T00:00:00.000000000000Z"
          },
          "envelope": "Groceries"
        },
        "colour": "Red",
        "fillAmount": 0
      },
      {
        "demand": {
          "amount": 40,
          "period": {
            "start": "2015-09-14T00:00:00.000000000000Z",
            "end": "2015-09-14T00:00:00.000000000000Z"
          },
          "envelope": "Gas"
        },
        "colour": "Red",
        "fillAmount": 0
      },
      {
        "demand": {
          "amount": 65,
          "period": {
            "start": "2015-09-15T00:00:00.000000000000Z",
            "end": "2015-09-15T00:00:00.000000000000Z"
          },
          "envelope": "Electricity"
        },
        "colour": "Red",
        "fillAmount": 0
      },
      {
        "demand": {
          "amount": 800,
          "period": {
            "start": "2015-09-15T00:00:00.000000000000Z",
            "end": "2015-09-15T00:00:00.000000000000Z"
          },
          "envelope": "Rent"
        },
        "colour": "Red",
        "fillAmount": 0
      },
      {
        "demand": {
          "amount": 50,
          "period": {
            "start": "2015-09-21T00:00:00.000000000000Z",
            "end": "2015-09-21T00:00:00.000000000000Z"
          },
          "envelope": "Groceries"
        },
        "colour": "Red",
        "fillAmount": 0
      },
      {
        "demand": {
          "amount": 250,
          "period": {
            "start": "2015-09-21T00:00:00.000000000000Z",
            "end": "2015-09-21T00:00:00.000000000000Z"
          },
          "envelope": "Credit Union"
        },
        "colour": "Red",
        "fillAmount": 0
      },
      {
        "demand": {
          "amount": 60,
          "period": {
            "start": "2015-09-21T00:00:00.000000000000Z",
            "end": "2015-09-21T00:00:00.000000000000Z"
          },
          "envelope": "UPC"
        },
        "colour": "Red",
        "fillAmount": 0
      },
      {
        "demand": {
          "amount": 50,
          "period": {
            "start": "2015-09-28T00:00:00.000000000000Z",
            "end": "2015-09-28T00:00:00.000000000000Z"
          },
          "envelope": "Groceries"
        },
        "colour": "Red",
        "fillAmount": 0
      },
      {
        "demand": {
          "amount": 40,
          "period": {
            "start": "2015-11-20T00:00:00.000000000000Z",
            "end": "2015-11-20T00:00:00.000000000000Z"
          },
          "envelope": "Water"
        },
        "colour": "Red",
        "fillAmount": 0
      }
    ],
    "id": "558b162b5a19240007000000"
  };
};
