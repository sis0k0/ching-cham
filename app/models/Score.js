System.register([], function(exports_1) {
    var Score;
    return {
        setters:[],
        execute: function() {
            Score = (function () {
                function Score(points, test, user) {
                    this.points = points;
                    this.test = test;
                    this.user = user;
                }
                return Score;
            })();
            exports_1("Score", Score);
        }
    }
});
//# sourceMappingURL=score.js.map