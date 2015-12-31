class Score
  include Mongoid::Document

  field :point, type: Integer
  field :achieved_at, type: Time, default: ->{ Time.now }

  belongs_to :user
  belongs_to :test
end