System.register([], function(exports_1) {
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(username, password, email, role) {
                    this.username = username;
                    this.password = password;
                    this.email = email;
                    this.role = role;
                }
                return User;
            })();
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.js.map