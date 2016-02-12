require_relative '../../story_helper.rb'

describe 'Api::AuthStory', :story do
  def teardown
    User.delete_all
  end

  def setup
    User.delete_all
  end

# ----------- POST /api/register -----------

  describe 'POST /api/register' do
    before do
      @user = Factory.build :user
      post_json('/api/register', user: @user)
    end

    let(:resp) { json_parse(last_response.body) }

    it 'responds successfully' do
      last_response.status.must_equal 200
      resp[:status].must_equal 'success'
    end

    it 'returns the new user' do
      resp[:user].wont_be_nil
      resp[:user][:username].must_equal @user.username
      resp[:user][:email].must_equal @user.email
    end
  end

# ----------- POST /api/login -----------
 
  describe 'POST /api/login when username/password match' do
    before do
      @user = { username: 'userr', email: 'user@abv.bg', password: 'shalqlq'}
      User.create(@user).save!
      post_json('/api/login', user: @user)
    end

    let(:resp) { json_parse(last_response.body) }

    it 'responds successfully' do
      last_response.status.must_equal 200
      resp[:status].must_equal 'success'
    end

    it 'returns the new user' do
      resp[:user].wont_be_nil
      resp[:user][:username].must_equal @user[:username]
      resp[:user][:email].must_equal @user[:email]
    end
  end

  describe 'POST /api/login when password does not match' do
    before do
      @user = Factory.create :user
      post_json('/api/login', user: @user)
    end

    it 'responds with error' do
      last_response.status.must_equal 422
      last_response.body.must_equal 'Wrong username/password!'
    end
  end

  describe 'POST /api/login when uesr does not exist' do
    before do
      @user = Factory.build :user
      post_json('/api/login', user: @user)
    end

    it 'responds with error' do
      last_response.status.must_equal 404
      last_response.body.must_equal 'User not found.'
    end
  end
end