System.register([], function(exports_1) {
    var Question;
    return {
        setters:[],
        execute: function() {
            Question = (function () {
                function Question(question, answer, givenAnswer, timeGivenUser, timeForAnswerUser) {
                    this.question = question;
                    this.answer = answer;
                    this.givenAnswer = givenAnswer;
                    this.timeGivenUser = timeGivenUser;
                    this.timeForAnswerUser = timeForAnswerUser;
                }
                return Question;
            })();
            exports_1("Question", Question);
        }
    }
});
//# sourceMappingURL=question.js.map