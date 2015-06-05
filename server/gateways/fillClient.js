var url = 'http://104.155.19.251:8001/budget/json';
//var url = 'http://localhost:8001/budget/json';

FillClient = function (args) {
    if (args) {
        this._url = args.url || url;
    } else {
        this._url = url;
    }
};


/**
 * Sends a request ot the fill service to calculate and populate fills based on the income, demands and
 * opening balance provided in request.
 *
 * @param args
 * @returns {{balance: number, fills: *[]}}
 */
FillClient.prototype.getFills = function (args) {

    /**
     Example request:

     budgetRequest: {
            income: [{
                date: "2015-3-1",
                amount: 2222
            }],
            demands: [{
                envelope: "",
                amount: 1111,
                period: {
                    start: "2015-3-5",
                    end: "" // Optional
                }
            }],
            balance: 11111 // income to this date (user input)
        }

     */

    var result = HTTP.post(this._url, {data: args.budgetRequest});
    return result.data;
};
