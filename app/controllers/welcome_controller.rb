class WelcomeController < ApplicationController
before_action :authenticate_user, only: [:index]
  def index
    @users = User.all
  
    #need this to display the users on the welcome index page
  end

  def show
  end

<<<<<<< HEAD
end
=======
>>>>>>> 80dfef16ab366fcb4dd5f828591722c4dfeede32
  private
    def user_params
    params.require(:user).permit(:email)
  end
end
