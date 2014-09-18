class WelcomeController < ApplicationController
  before_action :authenticate_user!

  def index
    @users = User.all
    @friendships = Friendship.all
    #need this to display the users on the welcome index page
  end
   def new
    @friendship = Friendship.new
  end
  def create
    @friendship = current_user.friendships.build(:friend_id => params[:friend_id])
    if @friendship.save
      flash[:notice] = "Friend added to @home list!"
      redirect_to root_url
    else
      flash[:error] = "Error adding friend to your @home list"
      redirect_to root_url
    end
  end

  def destroy
    @friendship = current_user.friendships.find(params[:id])
    @friendship.destroy
    flash[:notice] = "Removed friend from your @home list!"
    redirect_to current_user
  end

  private
    def user_params
      params.require(:user).permit(:email)
    end
end
