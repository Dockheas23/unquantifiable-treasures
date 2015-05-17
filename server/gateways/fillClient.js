var url = '';

FillClient = function (args) {
    if (args) {
        this._url = args.url || url;
    } else {
        this._url = url;
    }
};


/**
 * Sends a request ot the fill service to calculate and populate fills based on the income, demands and
 * opengin balance provided in request.
 *
 * @param args
 * @returns {{balance: number, fills: *[]}}
 */
FillClient.prototype.getFills = function (args) {

    /**
     Example request:

     budgetRequest: {
            income: [{
                date: "2015/3/1",
                amount: 2222
            }],
            demands: [{
                envelope: "",
                amount: 1111,
                period: {
                    start: "",
                    end: "" // Optional
                }
            }],
            balance: 11111 // income to this date (user input)
        }

     */


    return {
        balance: 8948,
        fills: [{
            envelop: "test-envelop",
            date: "test-date",
            amount: 12891
        }]
    }
};