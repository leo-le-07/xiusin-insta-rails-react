class V1::ThingsController < ApplicationController
  def index
    render json: { things: [
      {
        name: 'some-thing',
        guid: '1232134234'
      },
      {
        name: 'thing-some-thing',
        guid: '5345345'
      }
    ] }.to_json
  end
end
