System.register([], function(exports_1) {
    var Question;
    return {
        setters:[],
        execute: function() {
            Question = (function () {
                function Question(question, answer, givenAnswer, time_given, time_for_answer) {
                    this.question = question;
                    this.answer = answer;
                    this.givenAnswer = givenAnswer;
                    this.time_given = time_given;
                    this.time_for_answer = time_for_answer;
                }
                return Question;
            })();
            exports_1("Question", Question);
        }
    }
});
//# sourceMappingURL=question.js.map