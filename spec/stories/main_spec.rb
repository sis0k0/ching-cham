require_relative '../story_helper.rb'

describe 'App::Story', :story do
  it 'responds' do
    get '/'
    last_response.status.must_equal 200
    last_response.original_headers['Content-Type'].must_equal 'text/html;charset=utf-8'
    last_response.body.wont_be_nil
    last_response.body.wont_be_empty
  end

  it 'test_db' do
    user = User.new(username: "sis0k0")
    user.wont_be_nil
  end
end