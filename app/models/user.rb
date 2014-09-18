class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :email, presence: true

# this workflow  is allowing us to display whether or not your friends are available
 include Workflow
  workflow do

    state :unavailable do
     event :become_available, transitions_to: :available
    end 
    
    state :available do
     event :get_busy, transitions_to: :unavailable
    end
  end

  has_many :friendships
  has_many :users, through: :friendships
  #this has_many is creating a relationship between user and their friendships, their friendships are with other users(ie: friends)

end
