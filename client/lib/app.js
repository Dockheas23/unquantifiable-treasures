angular.module('ut', [
  'angular-meteor',
  'ui.router',
  'ngMaterial']);

function onReady() {
  angular.bootstrap(document, ['ut']);
}

if (Meteor.isCordova)
  angular.element(document).on("deviceready", onReady);
else
  angular.element(document).ready(onReady);


