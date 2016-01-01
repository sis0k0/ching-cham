require_relative '../spec_helper'

describe 'Model::QuestionModel', :unit do
  let(:valid_question) { 'This is a valid question, isn\'t it?' }
  let(:too_short_question) { 'q' }
  let(:too_long_question) { 'wookiewookiewookiewookiewookiewookiewookie' }

  let(:valid_answer) { 'valid answer' }
  let(:too_short_answer) { 'a' }
  let(:too_long_answer) { 'chewiechewiechewiechewiechewiechewiechewie' }

  describe 'Creates Test with Questions', :unit do
    def teardown
      Test.delete_all
    end

    it 'creates when given valid data' do
      Test.create(
        name: 'valid name',
        questions: [
          Question.new(
            question: valid_question,
            answer: valid_answer,
          ),
        ]
      )

      Test.count.must_equal 1
      Test.first.questions.first.question.must_equal valid_question
      Test.first.questions.first.answer.must_equal valid_answer
    end

    it 'does not create when given too short question' do
      Test.create(
        name: 'valid name',
        questions: [
          Question.new(
            question: too_short_question,
            answer: valid_answer,
          ),
        ]
      )

      Test.count.must_equal 0
    end

    it 'does not create when given too long question' do
      Test.create(
        name: 'valid name',
        questions: [
          Question.new(
            question: too_long_question,
            answer: valid_answer,
          ),
        ]
      )

      Test.count.must_equal 0
    end

    it 'does not create when given too short answer' do
      Test.create(
        name: 'valid name',
        questions: [
          Question.new(
            question: valid_question,
            answer: too_short_answer,
          ),
        ]
      )

      Test.count.must_equal 0
    end

    it 'does not create when given too long question' do
      Test.create(
        name: 'valid name',
        questions: [
          Question.new(
            question: valid_question,
            answer: too_long_question,
          ),
        ]
      )

      Test.count.must_equal 0
    end
  end
end