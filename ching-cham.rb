ENV['RACK_ENV'] ||= 'development'

require 'rubygems'
require 'bundler/setup'
Bundler.require :default, ENV['RACK_ENV'].to_sym
Mongoid.load!('./mongoid.yml')

require_relative './utilities/auth'
require_relative './utilities/users'
require_relative './utilities/tests'
require_relative './utilities/scores'
require_relative './utilities/password'
require_relative './utilities/json_helpers'

require_relative './models/user'
require_relative './models/test'
require_relative './models/question'
require_relative './models/score'


module Api
  class Base < ::Sinatra::Base
    configure do
      set :public_folder, File.dirname(__FILE__)
      enable :sessions, :loggin, :raise_errors, :show_exceptions
      set :show_exceptions, :after_handler

      register ::Sinatra::Namespace
      register ::Sinatra::Auth
      register ::Sinatra::Users
      register ::Sinatra::Tests
      register ::Sinatra::Scores
    end

    helpers JsonHelpers

    get '/' do
      slim :index, {content_type: 'text/html'}
    end

    namespace '/api' do
      error Mongoid::Errors::DocumentNotFound do |error|
        halt 404, "#{error.klass} not found."
      end

      error Mongoid::Errors::MongoidError do |error|
        halt 400, error.message
      end

      error 401 do
        halt 401, "You are not authorized for this route!"
      end

      error 500 do
        p error.message
        halt 500, "Something (really) bad happened! Please, try again later!"
      end
    end

    run! if app_file == $0
  end
end