System.register([], function(exports_1) {
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(username, password, email, role, scores, newPasssword) {
                    this.username = username;
                    this.password = password;
                    this.email = email;
                    this.role = role;
                    this.scores = scores;
                    this.newPasssword = newPasssword;
                }
                return User;
            })();
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.js.map