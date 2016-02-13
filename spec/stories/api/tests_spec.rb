require_relative '../../story_helper.rb'

describe 'Api::TestsStory', :story do
  def teardown
    Test.delete_all
  end

  def setup
    Test.delete_all
  end

# ----------- GET /api/tests -----------

  describe 'GET /api/tests' do
    before do
      @test = Test.create(name: 'random')
      @test.save!
      get '/api/tests'
    end

    let(:response) { json_parse(last_response.body) }
    let(:returned_tests) { response[:tests] }
    
    it 'responds successfully' do
      last_response.status.must_equal 200
      response[:status].must_equal 'success'
    end

    it 'must contain names and created_at' do
      response[:tests].all? { |test| test.has_key?(:name) }
      response[:tests].all? { |test| test.has_key?(:created_at) }
    end

    it 'must contain created test' do
      response[:tests].any? do |test|
        test[:name] == @test.name
      end
    end

    it 'returns 1 test' do
      returned_tests.size.must_equal 1
    end
  end
end