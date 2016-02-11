class Question
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic
  
  field :question, type: String
  field :answer, type: String

  field :answers_count, type: Integer, default: 0
  field :correct_answers_count, type: Integer, default: 0
  
  field :time_given, type: Integer, default: 0
  field :time_for_answer, type: Integer, default: 0
  
  field :difficulty, type: Float, default: 0.5

  validates_presence_of :question, message: 'question cannot be empty'
  validates_length_of :question, within: 2..140, message: 'question must be between 2 and 140 characters long'

  validates_presence_of :answer, message: 'answer cannot be empty'
  validates_length_of :answer, within: 2..140, message: 'answer must be between 2 and 140 characters long'

  embedded_in :test

  before_save :calculate_difficulty

  private

  def calculate_difficulty
    if(self.answers_count != 0)
      if(self.correct_answers_count == 0)
        time_difficulty = 1
      else
        average_time_for_correct_answer = self.time_for_answer / self.correct_answers_count
        average_time_given = self.time_given / self.correct_answers_count
        time_difficulty = average_time_given / average_time_for_correct_answer
      end

      wrong_answers_count = self.answers_count - self.correct_answers_count
      answers_difficulty = wrong_answers_count / self.answers_count

      p time_difficulty
      p answers_difficulty
      self.difficulty = (time_difficulty + answers_difficulty) / 2
    end
  end
end