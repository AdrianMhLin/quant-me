class HomeController < ApplicationController
  def index
    render :index
  end

  def sign_up
    render :sign_up
  end

  def calendar
    render :calendar
  end

  def stats
    render :stats
  end

end