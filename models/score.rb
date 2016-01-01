class Score
  include Mongoid::Document

  field :points, type: Integer
  field :achieved_at, type: Time, default: ->{ Time.now }

  validates_presence_of :points, message: 'points cannot be empty'

  belongs_to :user
  belongs_to :test
end