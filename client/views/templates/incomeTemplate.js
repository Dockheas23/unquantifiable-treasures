'use strict';

Template.incomeTemplate.helpers({
  incomes: function () {
    return Incomes.find({owner: Meteor.userId()});
  }
});


Template.home.events({
  'submit .new-income': function (event) {
    var incomeDate = event.target.incomeDate.value;
    var amount = event.target.incomeAmount.value;
    Incomes.insert({
      date: new Date(incomeDate),
      amount: Number(amount),
      owner: Meteor.userId()
    });
    event.target.incomeDate.value = '';
    event.target.incomeAmount.value = '';
    return false;
  },
  'click .delete-income': function (event) {
    var incomeId = event.target.attributes['data-button'].value;
    Incomes.remove({_id: incomeId});
  }
});
