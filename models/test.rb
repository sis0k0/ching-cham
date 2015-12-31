class Test
  include Mongoid::Document

  field :name, type: String
  field :created_at, type: Time, default: ->{ Time.now }

  embeds_many :questions, cascade_callbacks: true
  has_many :scores, dependent: :delete
end