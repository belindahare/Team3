class WelcomeController < ApplicationController
  before_action :authenticate_user!

  def index
    @users = User.all
    @friendships = Friendship.all
    #need this to display the users on the welcome index page
  end

end
