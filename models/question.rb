class Question
  include Mongoid::Document
  
  field :question, type: String
  field :answer, type: String

  field :answers_count, type: Integer
  field :wrong_answers_count, type: Integer
  
  field :seconds_given, type: Integer
  field :seconds_for_answer, type: Integer
  
  field :difficulty, type: Float

  embedded_in :test
end