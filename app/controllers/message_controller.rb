class MessageController < ApplicationController
  def broadcast
    Pusher.trigger('chat', 'user:said', message)
  end

  def message
    {
      :from => current_user.email, 
      :message => params[:message]
    }
  end
end

