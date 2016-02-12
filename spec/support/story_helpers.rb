module StoryHelpers
  def get_json(path)
    get path
    json_parse(last_response.body)
  end

  def post_json(url, data)
    post(url, json(data),  'CONTENT_TYPE' => 'application/json')
  end

  def put_json(url, data)
    put(url, json(data),  'CONTENT_TYPE' => 'application/json')
  end

  def delete_json(path)
    delete json
    json_parse(last_response.body)
  end

  def json_parse(body)
    MultiJson.load(body, symbolize_keys: true)
  end

  def json(hash)
    MultiJson.dump(hash, pretty: true)
  end
end