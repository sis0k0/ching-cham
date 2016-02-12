ENV['RACK_ENV'] = 'test'

require 'codeclimate-test-reporter'
CodeClimate::TestReporter.start

require 'bundler'
Bundler.require :default, :test

require 'minitest/autorun'
require 'minitest/rg'
require 'mocha/mini_test'

require_relative '../ching-cham'
require_relative 'support/unit_helpers.rb'

class UnitTest < MiniTest::Spec
  include UnitHelpers
  include Rack::Test::Methods

  register_spec_type(self) do |description, *test_types|
    true if description.is_a?(Class)
    test_types.include? :unit
  end
end