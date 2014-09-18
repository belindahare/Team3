# class UserController < ApplicationController
#   def index
#     @users = User.all
#   end
#   def show
#     @user = current_user
#   end
#   def new
#     @user = User.new
#   end
#   def create 
#     @user = User.new(params[:user])
#     if @user.save
#       session[:user_id] =@user.user_id
#       flash[:notice= "Awesome! You're logged in and you're going to love it!"]
#       redirect_to root_path
#     #this is where the user's session is confirmed
#     end
#   end
# end
