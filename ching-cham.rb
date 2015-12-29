ENV['RACK_ENV'] ||= 'development'

require 'rubygems'
require 'bundler/setup'
Bundler.require :default, ENV['RACK_ENV'].to_sym
Mongoid.load!('./mongoid.yml')

module JsonHelpers
  def json(hash)
    MultiJson.dump(hash, pretty: true)
  end

  def parsed_params
    has_params = request.get? or request.form_data?
    parsed = has_params ? params : MultiJson.load(request.body, symbolize_keys: true)
    parsed = {} unless parsed.is_a?(Hash)

    parsed
  end
end

module Api
  class Base < ::Sinatra::Base
    set :public_folder, File.dirname(__FILE__)

    configure do
      enable :logging
      enable :raise_errors, :logging
      enable :show_exceptions

      register ::Sinatra::Namespace
    end

    helpers JsonHelpers

    get '/' do
      slim :index, {:content_type => 'text/html'}
    end

    namespace '/api' do
      get '/?' do
        json(status: 'success', message: 'API v1')
      end

      get '/users' do
        users = %w(bob andy john)
        json(status: 'success', users: users)
      end

      post '/users' do
        user = parsed_params[:user]
        json(status: 'success', user: user)
      end
    end

    run! if app_file == $0
  end
end