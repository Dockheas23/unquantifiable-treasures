'use strict';

Template.envelopeTemplate.helpers({
  envelopes: function () {
    return Envelopes.find({owner: Meteor.userId()});
  }
});

Template.home.events({
  'submit .new-envelope': function (event) {
    var envelopeName = event.target.envelopeName.value;
    Envelopes.insert({
      name: envelopeName,
      owner: Meteor.userId()
    });
    event.target.envelopeName.value = '';
    return false;
  },
  'click .delete-envelope': function (event) {
    var envelopeId = event.target.attributes['data-button'].value;
    Envelopes.remove({_id: envelopeId});
  }
});
