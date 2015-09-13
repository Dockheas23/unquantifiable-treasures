angular
  .module('ut')
  .service('budget', [budget]);


function budget() {
  var sampleBudget = {
    "openingBalance": 0,
    "closingBalance": 100,
    "income": [
      {
        "amount": 200,
        "date": "2015-01-02T00:00:00.000000000000Z"
      }
    ],
    "fills": [
      {
        "amount": 100,
        "date": "2015-01-02T00:00:00.000000000000Z",
        "demandPeriod": {
          "start": "2015-02-02T00:00:00.000000000000Z",
          "end": "2015-02-02T00:00:00.000000000000Z"
        },
        "envelope": "Test"
      }
    ],
    "userId": "Q7EcYczGHzE6s73pM",
    "demands": [
      {
        "amount": 100,
        "period": {
          "start": "2015-02-02T00:00:00.000000000000Z",
          "end": "2015-02-02T00:00:00.000000000000Z"
        },
        "envelope": "Test"
      }
    ],
    "demandSummaries": [
      {
        "demand": {
          "amount": 100,
          "period": {
            "start": "2015-02-02T00:00:00.000000000000Z",
            "end": "2015-02-02T00:00:00.000000000000Z"
          },
          "envelope": "Test"
        },
        "colour": "Green",
        "fillAmount": 100
      }
    ],
    "id": "55f58290cb3d0c4a4b000000"
  };


  return {
    getBudget: function () {
      return sampleBudget;
    }
  }


}

