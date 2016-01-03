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