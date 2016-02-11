module Sinatra
  module Users
    module Helpers
    end

    def self.registered(app)
      app.helpers Users::Helpers

      app.get '/api/users' do protected(role: 'admin')
        users = User.all
        json(status: 'success', users: users)
      end

      app.get '/api/user/:username' do
        db_user = User.find_by(username: params['username'])

        user = {
          username: db_user.username,
          email: db_user.email,
        }

        user[:scores] = []
        db_user.scores.each do |score|
          user[:scores] << {
            points: score.points,
            achieved_at: score.achieved_at,
            test: score.test.name,
          }
        end

        json(success: 'success', user: user)
      end

      app.put '/api/user/:username' do protected(username: params['username'], role: 'admin')
        user = User.find_by(username: params['username'])
        user.email = parsed_params[:email] if parsed_params[:email]
        user.password = parsed_params[:password] if parsed_params[:password]
        user.save!

        json(success: 'success', user: user)
      end

      app.delete '/api/user/:username' do protected(username: params['username'], role: 'admin')
        User.find_by(username: params[:username]).delete
        json(success: 'success')
      end
    end
  end

  register Users
end