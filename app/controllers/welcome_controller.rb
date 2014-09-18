class WelcomeController < ApplicationController
before_action :authenticate_user, only: [:index]
  def index
    @users = User.all
    @friendships = Friendship.all
    #need this to display the users on the welcome index page
  end

  def show
  end

end
  private
    def user_params
    params.require(:user).permit(:email)
  end
end
