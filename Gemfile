source 'https://rubygems.org'
ruby '2.2.3'
gem 'sinatra', '~> 1.4', require: 'sinatra/base'
gem 'slim', '~> 3.0'
gem 'multi_json', '~> 1.11'
gem 'rack'
gem 'rake'
gem 'sinatra-contrib'
gem 'mongoid', '~> 4.0.0'
gem 'bcrypt-ruby'

group :development do
  gem 'foreman'

  gem 'wdm', '>= 0.1.0' if Gem.win_platform?
  gem 'guard'
  gem 'guard-minitest', require: false
  gem 'guard-livereload', '~> 2.4', require: false
  gem 'guard-bundler', require: false
end

group :test do
  gem 'minitest', '~> 5.4.1'
  gem 'minitest-rg'
  gem 'rack-test', '~> 0.6.3'
  gem 'mocha', '~> 1.1', require: false
  gem 'codeclimate-test-reporter', require: false
end