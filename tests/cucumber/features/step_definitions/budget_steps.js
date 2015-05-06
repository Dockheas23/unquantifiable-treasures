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

        this.Given(/^I am on the home page$/, function (next) {
            console.log("Given 1");
            next();
        });

        this.Given(/^I am logged in$/, function (next) {
            console.log("Given 2");
            next();
        });

        this.When(/^I click on "([^"]*)"$/, function (button, next) {
            console.log("When: " + button);
            next();
        });

        this.Then(/^A new budget should be created$/, function (next) {
            console.log("Then");
            next();
        });


    }

})();
