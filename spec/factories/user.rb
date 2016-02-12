Factory.define :user do |user|
  user.username { %w[alice lqlqlql carol].sample }
  user.email { "#{%w[alice bob carol].sample}@example.com" }
  user.password { %w[shalqlq lqlqlq password].sample }
end