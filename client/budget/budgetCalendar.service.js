angular
  .module('ut')
  .service('budgetCalendar', [budgetCalendar]);

function budgetCalendar() {

  var currentCalendar = {
    January: {days: 31},
    February: {days: 28},
    March: {days: 31},
    April: {days: 30},
    May: {days: 31},
    June: {days: 30},
    July: {days: 31},
    August: {days: 31},
    September: {days: 30},
    October: {days: 31},
    November: {days: 30},
    December: {days: 31}
  };


  return {
    getBudgetCalendar: function () {
      return currentCalendar;
    }
  }


}

