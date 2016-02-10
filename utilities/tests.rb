module Sinatra
  module Tests
    module Helpers
      def generate_questions(questions)
        questions.map do |q|
          Question.new(
            question: q[:question],
            answer: q[:answer]
          )
        end
      end

      def generate_test(test)
        test = Test.new(
          name: test[:name],
          questions: generate_questions(test[:questions])
        )
      end
    end

    def self.registered(app)
      app.helpers Tests::Helpers

      app.post '/api/test' do
        test = generate_test(parsed_params[:test])
        test.save!

        json(status: 'success', test: test)
      end

      app.get '/api/tests' do
        tests = Test.all
        json(status: 'success', tests: tests)
      end
    end
  end

  register Tests
end