/**
 * We can put whatever crap we come up with to be done before and after cucumber tests in here
 */
(function () {

    'use strict';

    module.exports = function () {

        var helper = this;

        this.Before(function () {
            var world = helper.world;
            var next = arguments[arguments.length - 1];
            world.browser.
                init().
                call(function () {
                    // Some setup logic in here if we need it
                    next();
                });
        });

        this.After(function () {
            var world = helper.world;
            var next = arguments[arguments.length - 1];
            world.browser.
                end().
                call(function () {
                    // Some tear down logic in here
                    next();
                });
        });

    };

})();