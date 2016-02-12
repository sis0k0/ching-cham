require_relative 'spec_helper'
require_relative 'support/story_helpers.rb'
require_relative 'support/session_helpers.rb'

require_relative 'factories/user.rb'

require 'rack/test'

class StoryTest < UnitTest
  include StoryHelpers

  register_spec_type(self) do |description, *test_types|
    test_types.include? :story
  end

  def app
    Api::Base
  end
end