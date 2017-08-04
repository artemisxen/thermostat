require 'sinatra'
require 'json'

get '/temperature' do
  headers 'Access-Control-Allow-Origin' => '*'
  Time.now.to_s
end

post '/temperature' do
  headers 'Access-Control-Allow-Origin' => '*'
  temperature = params[:temperature]
  p temperature
end
