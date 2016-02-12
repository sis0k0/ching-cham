require_relative '../../story_helper.rb'

describe 'Api::UsersStory', :story do
  def teardown
    User.delete_all
  end

  def setup
    User.delete_all
  end

# ----------- GET /api/users -----------

  describe 'GET /api/users as admin' do
    before do
      @user = Factory.create :user
      current_session.rack_session[:user_role] = 'admin'
      get '/api/users'
    end

    let(:response) { json_parse(last_response.body) }
    let(:users) { response[:users] }
    
    it 'responds successfully' do
      last_response.status.must_equal 200
      response[:status].must_equal 'success'
    end

    it 'must not contain user paswords' do
      response[:users].none? { |user| user.has_key?(:password) }
    end

    it 'must contain usernames and emails' do
      response[:users].all? { |user| user.has_key?(:username) }
      response[:users].all? { |user| user.has_key?(:email) }
    end

    it 'must contain created user' do
      response[:users].any? do |user|
        user[:username] == @user.username and user[:email] == @user.email
      end
    end

    it 'returns 1 user' do
      users.size.must_equal 1
    end
  end

  describe 'GET /api/users as user' do
    before do
      current_session.rack_session[:user_role] = 'user'
      get '/api/users'
    end
    
    it 'responds with error' do
      last_response.status.must_equal 401
      last_response.body.must_equal 'You are not authorized for this route!'
    end
  end

  describe 'GET /api/users as anonymous' do
    before do
      get '/api/users'
    end
    
    it 'responds with error' do
      last_response.status.must_equal 401
      last_response.body.must_equal 'You are not authorized for this route!'
    end
  end


# ----------- GET /api/user/:username -----------

  describe 'GET /api/user/:username when user exists' do
    before do
      @user = Factory.create :user
      get "/api/user/#{@user.username}"
    end

    let(:response) { json_parse(last_response.body) }
    let(:user) { response[:user] }

    it 'responds successfully' do
      last_response.status.must_equal 200
      response[:status].must_equal 'success'
    end

    it 'must contain found user' do
      response[:user][:username].must_equal @user.username
      response[:user][:email].must_equal @user.email
    end

    it 'must not contain user passwords' do
      response[:user].has_key?(:password)
    end

    it 'must contain usernames, emails and scores' do
      response[:user].has_key? :username
      response[:user].has_key? :email
      response[:user].has_key? :scores
    end
  end

  describe 'GET /api/user/:username when user does not exist' do
    before do
      @user = Factory.build :user
      get "/api/user/#{@user.username}"
    end

    it 'responds with error' do
      last_response.status.must_equal 404
      last_response.body.must_equal 'User not found.'
    end
  end

# ----------- PUT /api/user/:username -----------

  describe 'DELETE /api/user/:username when admin' do
    before do
      @user = Factory.create :user
      current_session.rack_session[:user_role] = 'admin'
      delete "/api/user/#{@user.username}"
    end

    it 'responds successfully' do
      last_response.status.must_equal 200
    end
  end

  describe 'DELETE /api/user/:username when the same user' do
    before do
      @user = Factory.create :user
      current_session.rack_session[:username] = @user.username
      delete "/api/user/#{@user.username}"
    end

    it 'responds successfully' do
      last_response.status.must_equal 200
    end
  end

  describe 'DELETE /api/user/:username when unauthorized' do
    before do
      @user = Factory.create :user
      delete "/api/user/#{@user.username}"
    end

    it 'responds with error' do
      last_response.status.must_equal 401
      last_response.body.must_equal 'You are not authorized for this route!'
    end
  end
end