# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

pusher = new Pusher('d3854b72bdc59f1e7e7a')
channel = pusher.subscribe 'chat'

channel.bind 'user:said', (data) ->
  message = new MessageView(data)

$ ->
  chat_box = new ChatBox