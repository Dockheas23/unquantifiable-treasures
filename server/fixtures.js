Meteor.startup(function () {
    // code to run on server at startup
    if (Meteor.users.find().count() == 0) {
        var users = [
            {name: "Normal User", email: "normal@test.com", roles: ['normal'], password: "normal22"},
            {name: "Admin User", email: "admin@test.com", roles: ['admin'], password: "admin22"}
        ];

        _.each(users, function (user) {
            var id = Accounts.createUser({
                email: user.email,
                password: user.password,
                profile: {name: user.name}
            });

            if (user.roles.length > 0) {
                Roles.addUsersToRoles(id, user.roles);
            }
        });
    }
    ;
});