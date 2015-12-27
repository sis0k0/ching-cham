require_relative '../../story_helper.rb'

describe 'Api::Story', :story do
  it 'responds' do
    get '/api'
    last_response.status.must_equal 200
  end
end