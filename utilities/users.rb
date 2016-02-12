module Sinatra
  module Users
    module Helpers
      def map_scores(user)
        scores = []
        user.scores.map do |score|

          scores << {
            points: score.points,
            achieved_at: score.achieved_at,
            test: score.test.name,
          }
        end
        scores
      end

      def password_correct(user, password)
        user.password == password
      end

      def update_user(user, new_details)
        halt(422, 'Wrong password!') unless password_correct(user, new_details[:password])

        user.email = new_details[:email] if new_details[:email]
        user.password = new_details[:newPassword] if new_details[:newPassword]
        user.save!
      end
    end

    def self.registered(app)
      app.helpers Users::Helpers

      app.get '/api/users' do protected(role: 'admin')
        users = User.all.without(:password)
        json(status: 'success', users: users)
      end

      app.get '/api/user/:username' do
        db_user = User.find_by(username: params['username'])

        user = {
          username: db_user.username,
          email: db_user.email,
          scores: map_scores(db_user),
        }

        json(status: 'success', user: user)
      end

      app.put '/api/user/:username' do protected(username: params['username'], role: 'admin')
        user_details = parsed_params[:user]
        user = User.find_by(username: params['username'])
        update_user(user, user_details)

        status 200
      end

      app.delete '/api/user/:username' do protected(username: params['username'], role: 'admin')
        User.find_by(username: params[:username]).delete
        status 200
      end
    end
  end

  register Users
end