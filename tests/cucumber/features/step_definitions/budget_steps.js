/**
 * Step definitions are the code behind the feature files
 */
(function () {

    'use strict';

    module.exports = function () {

        /**
         * Helper will give access to the 'world' object.
         * @type {module}
         */
        var helper = this;

        this.Given(/^I am on the home page$/, function (callback) {
            callback.pending();
        });

        this.Given(/^I am logged in$/, function (callback) {
            callback.pending();
        });

        this.When(/^I click on "([^"]*)"$/, function (button, callback) {
            callback.pending();
        });

        this.Then(/^A new budget should be created$/, function (callback) {
            callback.pending();
        });


    }

})();
