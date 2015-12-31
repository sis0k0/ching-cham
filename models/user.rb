class User
  include Mongoid::Document

  field :username, type: String
  field :password
  field :email, type: String
  field :registered_at, type: Time, default: ->{ Time.now }

  has_many :scores, dependent: :delete
end