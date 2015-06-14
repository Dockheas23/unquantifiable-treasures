'use strict';

Template.demandTemplate.helpers({
  demands: function () {
    return Demands.find({owner: Meteor.userId()});
  },
  envelopes: function () {
    return Envelopes.find({owner: Meteor.userId()});
  }
});

Template.home.events({
  'submit .new-demand': function (event) {
    var envelopeId = event.target.envelope.value;
    var demandDate = event.target.demandDate.value;
    var amount = event.target.demandAmount.value;
    Demands.insert({
      envelope: Envelopes.findOne({_id: envelopeId}),
      date: new Date(demandDate),
      amount: Number(amount),
      owner: Meteor.userId()
    });
    event.target.demandAmount.value = '';
    return false;
  },
  'click .delete-demand': function (event) {
    var demandId = event.target.attributes['data-button'].value;
    Demands.remove({_id: demandId});
  }
});
