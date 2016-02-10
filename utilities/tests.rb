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

      def select_questions(questions, difficulty)
        return questions if questions.size <= 10

        sorted_questions = questions.sort_by { |q| q.difficulty }
        extract(sorted_questions, difficulty).sample(10)
      end

      def extract(questions, difficulty)
        size = extract_size(questions.length)

        case difficulty.downcase
        when 'easy'
          questions.take(size)
        when 'intermediate'
          questions.slice((questions.length - size)/2, size)
        when 'hard'
          questions.reverse.take(size)
        else
          questions.sample(10)
        end
      end

      def extract_size(questions_count)
        if questions_count >= 50
          (questions_count * 30) / 100
        else
          10 + (questions_count * 30) / 100
        end
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

      app.get '/api/test/:name/:difficulty' do
        test = Test.find_by(name: params['name']).clone
        test.questions = select_questions(test.questions, params['difficulty'])

        json(status: 'success', test: test)
      end
    end
  end

  register Tests
end