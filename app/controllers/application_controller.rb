class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  #CELLL
  helper_method :current_user, :logged_in?

  private
  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def ensure_user_logged_in
    unless current_user
      render json: ['invalid credentials'], status: 401
    end
  end

  def logged_in?
    !!current_user
  end

  def log_in(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def log_out
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end
end
