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
    return {
        balance: 8948,
        fills: [{
            envelop: "test-envelop",
            date: "test-date",
            amount: 12891
        }]
    }
};