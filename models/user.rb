class User
  include Mongoid::Document

  field :username, type: String
  field :password, type: BCrypt::Password
  field :email, type: String
  field :role, type: String, default: 'user'
  field :registered_at, type: Time, default: ->{ Time.now }

  validates_presence_of :username, message: 'username cannot be empty'
  validates_uniqueness_of :username, message: 'username already taken'
  validates_length_of :username, within: 5..15, wrong_length: 'username must be between 5 and 15 characters long'
  validates_format_of :username, with: /\A\w+\Z/, message: 'username must contain only letters and digits'

  validates_presence_of :password, message: 'password cannot be empty'

  validates_presence_of :email, message: 'email cannot be empty'
  validates_uniqueness_of :email, message: 'email already taken'
  validates_format_of :email, with: /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i, message: 'invalid email provided'

  validates_inclusion_of :role, in: ['admin', 'user']

  has_many :scores, dependent: :delete
end