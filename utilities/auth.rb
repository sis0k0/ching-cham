module Sinatra
  module Auth
    module Helpers
      def login(user)
        session[:user_id] = user._id
        session[:user_role] = user.role
        json(status: 'success', user: user)
      end

      def logout
        session.clear
        status 200
      end

      def protected(id: nil, role: nil)
        halt 401 unless authorized?(id: id, role: role)
      end

      def password_correct(user, password)
        user.password == password
      end

      private
      
      def authorized?(id: nil, role: nil)
        is_same_user = (id == session[:user_id]) unless id.nil?
        is_authorized = (role == session[:user_role]) unless role.nil?

        is_same_user or is_authorized
      end
    end

    def self.registered(app)
      app.helpers Auth::Helpers

      app.post '/api/register' do
        # user = User.new(params[:user])
        user = User.new(username: params[:username], email: params[:email])

        user.password = params[:password]
        user.save!

        login user
      end

      app.post '/api/login' do
        user = User.find_by(username: params['username'])
        password_correct(user, params['password']) ? login(user) : halt(422) 
      end

      app.get '/api/logout/' do
        logout
      end
    end
  end

  register Auth
end