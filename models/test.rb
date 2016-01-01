class Test
  include Mongoid::Document

  field :name, type: String
  field :created_at, type: Time, default: ->{ Time.now }

  validates_presence_of :name, message: 'name cannot be empty'
  validates_uniqueness_of :name, message: 'name already taken'
  validates_length_of :name, within: 5..20, wrong_length: 'name must be between 5 and 20 characters long'

  embeds_many :questions, cascade_callbacks: true
  has_many :scores, dependent: :delete
end