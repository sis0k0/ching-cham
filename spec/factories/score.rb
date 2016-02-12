Factory.define :score do |score|
  score.points { [0, 100, 1000, 432432].sample }
end