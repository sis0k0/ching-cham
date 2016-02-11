module Sinatra
  module Scores
    module Helpers
      def calculate_points(questions)
        points = 0
        questions.each do |question|
          question[:answers_count] += 1
          if question[:givenAnswer] == question[:answer]
            question[:correct_answers_count] += 1
            points += (question[:timeGivenUser] - question[:timeForAnswerUser]) * question[:difficulty] * 100
          end
        end
        points
      end

      def map_questions(test_questions, selected_questions)
        test_questions.each do |test_question|
          selected_questions.each do |selected_question|
            if test_question == selected_question
              test_question = selected_question
            end
          end
        end
      end
    end

    def self.registered(app)
      app.helpers Scores::Helpers

      app.post '/api/score' do
        filled_test = parsed_params[:test]
        points = calculate_points(filled_test[:questions])

        test = Test.find_by(name: filled_test[:name])
        map_questions(test.questions, filled_test[:questions])
        test.save!

        user = User.find_by(username: filled_test[:filled_by]) unless filled_test[:filled_by].nil?
        score = Score.new(
          points: points,
          test: test,
          user: user)
        score.save!
        
        json(status: 'success', points: score.points)
      end

      app.get '/api/score/:test_name' do
        test = Test.find_by(name: parsed_params[:test_name])
        scores = Score.where(test: test).
          sort(points: -1).
          map do |score|
            user = score.user.username if score.user
            {
              user: user,
              points: score.points,
              achieved_at: score.achieved_at,
            }
          end

        json(status: 'success', scores: scores)
      end
    end
  end

  register Scores
end