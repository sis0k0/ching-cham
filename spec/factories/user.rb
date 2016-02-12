Factory.define :user do |f|
  f.username { %w[alice lqlqlql carol].sample }
  f.email { "#{%w[alice bob carol].sample}@example.com" }
  f.password { %w[shalqlq lqlqlq password].sample   }
end