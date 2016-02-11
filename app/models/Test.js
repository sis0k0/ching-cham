System.register([], function(exports_1) {
    var Test;
    return {
        setters:[],
        execute: function() {
            Test = (function () {
                function Test(name, questions, created_at, filled_by) {
                    this.name = name;
                    this.questions = questions;
                    this.created_at = created_at;
                    this.filled_by = filled_by;
                }
                return Test;
            })();
            exports_1("Test", Test);
        }
    }
});
//# sourceMappingURL=test.js.map