require 'rubygems'
require 'bundler/setup'
Bundler.require(:default)

set :public_folder, File.dirname(__FILE__)

get '/' do
  slim :index
end
