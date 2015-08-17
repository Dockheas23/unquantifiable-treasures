angular.module('ut').controller('DashboardController', DashboardController);


DashboardController.$inject = ['$mdToast'];

function DashboardController($mdToast) {
  'use strict';
  var vm = this;

  vm.openToast = function ($event) {
    $mdToast.show($mdToast.simple().content('Hello!'));
  };

}
