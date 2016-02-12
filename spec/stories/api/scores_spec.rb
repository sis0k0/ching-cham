require_relative '../../story_helper.rb'

describe 'Api::ScoresStory', :story do
  def teardown
    Score.delete_all
    Test.delete_all
  end

  def setup
    Score.delete_all
    Test.delete_all
  end

# ----------- GET /api/score/:test_name -----------

  describe 'GET /api/score/:test_name when test exists' do
    before do
      scores = []
      10.times { scores << Score.new(points: rand(1000)) }
      @test = Test.create(name: 'random_random', scores: scores)
      @test.save!

      get "/api/score/#{@test.name}"
    end

    let(:resp) { json_parse(last_response.body) }

    it 'responds successfully' do
      last_response.status.must_equal 200
      resp[:status].must_equal 'success'
    end

    it 'returns 10 scores' do
      resp[:scores].length.must_equal 10
    end
  end

  describe 'GET /api/score/:test_name when test does not exist' do
    before do
      random_string = "random"
      get "/api/score/#{random_string}"
    end

    it 'responds with error' do
      last_response.status.must_equal 404
      last_response.body.must_equal 'Test not found.'
    end
  end
end