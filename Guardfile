guard :minitest do
  watch(%r{^spec/(.*)_spec\.rb})
  watch(%r{^lib/(.+)\.rb})         { |m| "spec/#{m[1]}_spec.rb" }
  watch(%r{^spec/spec_helper\.rb}) { 'spec' }

  watch(%r{^app\.rb}) { 'spec' }
end

guard 'livereload' do
  extensions = {
    css: :css,
    scss: :css,
    sass: :css,
    js: :js,
    coffee: :js,
    html: :html,
    png: :png,
    gif: :gif,
    jpg: :jpg,
    jpeg: :jpeg,
  }

  view_extensions = %w(erb haml slim)

  compiled_exts = extensions.values.uniq
  watch(%r{public/.+\.(#{compiled_exts * '|'})})

  extensions.each do |ext, type|
    watch(%r{
          (?:app|vendor)
          (?:/assets/\w+/(?<path>[^.]+)
           (?<ext>\.#{ext}))
          (?:\.\w+|$)
          }x) do |m|
      path = m[1]
      "/assets/#{path}.#{type}"
    end
  end

  watch(%r{app/.+\.(#{view_extensions * '|'})$})
  watch(%r{views/.+\.(#{view_extensions * '|'})$})
  watch(%r{spec/.+\.rb})
  watch('ching-cham.rb')
end

guard :bundler do
  require 'guard/bundler'
  require 'guard/bundler/verify'
  helper = Guard::Bundler::Verify.new

  files = ['Gemfile']
  files += Dir['*.gemspec'] if files.any? { |f| helper.uses_gemspec?(f) }

  files.each { |file| watch(helper.real_path(file)) }
end
