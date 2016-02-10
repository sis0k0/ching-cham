System.register([], function(exports_1) {
    var Question;
    return {
        setters:[],
        execute: function() {
            Question = (function () {
                function Question(question, answer) {
                    this.question = question;
                    this.answer = answer;
                }
                return Question;
            })();
            exports_1("Question", Question);
        }
    }
});
//# sourceMappingURL=question.js.map