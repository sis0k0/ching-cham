System.register([], function(exports_1) {
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(username, password, email, role, scores) {
                    this.username = username;
                    this.password = password;
                    this.email = email;
                    this.role = role;
                    this.scores = scores;
                }
                return User;
            })();
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.js.map