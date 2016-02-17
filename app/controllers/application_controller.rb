class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  #controllers now will respond in json format
  respond_to :json
  # this allows us to send the username params with Devise (since Devise originally signs up with email)
  before_action :configure_permitted_parameters, if: :devise_controller?
  # this custom action tells Rails to serve the Angular app
  # in routes.rb we will define the root to route to this action
  def angular
  	render 'layouts/application'
  end

  private
  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :username
  end
end
