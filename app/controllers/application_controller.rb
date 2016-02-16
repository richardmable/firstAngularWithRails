class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  #controllers now will respond in json format
  respond_to :json
  # this custom action tells Rails to serve the Angular app
  # in routes.rb we will define the root to route to this action
  def angular
  	render 'layouts/application'
  end
end
