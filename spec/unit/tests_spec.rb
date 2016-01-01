require_relative '../spec_helper'

describe 'Model::TestModel', :unit do
  let(:valid_name) { 'Test1' }
  let(:too_short_name) { 'sh' }
  let(:too_long_name) { 'wookiewookiewookiewookie' }

  describe 'Creates Test', :unit do
    def teardown
      Test.delete_all
    end

    it 'creates when given valid data' do
      Test.create(name: valid_name)
      Test.count.must_equal 1
      Test.first.name.must_equal valid_name
    end

    it 'does not create when given too short name' do
      Test.create(name: too_short_name)
      Test.count.must_equal 0
    end

    it 'does not create when given too long name' do
      Test.create(name: too_long_name)
      Test.count.must_equal 0
    end
  end

  describe 'Deletes both Test and his scores', :unit do
    def teardown
      Test.delete_all
      Score.delete_all
      Question.delete_all
      User.delete_all
    end

    it 'populates deleting to scores' do
      Test.create(
        name: valid_name,
        scores: [Score.new(points: 1)],
      )
      Test.first.delete
      Score.count.must_equal 0
    end

    it 'populates deleting to user scores' do
      score = Score.new(points: 100)
      User.create(
        username: 'usernmae',
        password: 'pas',
        email: 'valid@email.com',
        scores: [score]
      )
      Test.create(
        name: valid_name,
        scores: [score],
      )

      Test.first.delete
      User.first.scores.size.must_equal 0
    end
  end
end