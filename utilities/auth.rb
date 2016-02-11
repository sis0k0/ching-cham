module Sinatra
  module Auth
    module Helpers
      def login(user)
        session[:user_id] = user._id
        session[:username] = user.username
        session[:user_role] = user.role
        json(status: 'success', user: user)
      end

      def logout
        session.clear
        status 200
      end

      def protected(id: nil, username: nil, role: nil)
        halt 401 unless authorized?(id: id, username: username, role: role)
      end

      def password_correct(user, password)
        user.password == password
      end

      private
      
      def authorized?(id: nil, username: nil, role: nil)
        same_id = id == session[:user_id] unless id.nil?
        same_username = session[:username] unless username.nil?
        authorized = (role == session[:user_role]) unless role.nil?

        same_id or same_username or authorized
      end
    end

    def self.registered(app)
      app.helpers Auth::Helpers

      app.post '/api/register' do
        user_details = parsed_params[:user]

        user = User.new(username: user_details[:username], email: user_details[:email])
        user.password = user_details[:password]
        user.save!

        login(user)
      end

      app.post '/api/login' do
        user_details = parsed_params[:user]

        user = User.find_by(username: user_details[:username])
        password_correct(user, user_details[:password]) ? login(user) : halt(422, 'Wrong username/password!') 
      end

      app.post '/api/logout' do
        logout
      end
    end
  end

  register Auth
end