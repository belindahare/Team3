class FriendshipController < ApplicationController
  def index
    @friendships = Friendship.all
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
end
#this controller is giving us the ability to create relationships between the users.  It also gives users the ability to add and delete people from their friends list