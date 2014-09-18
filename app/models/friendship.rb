class Friendship < ActiveRecord::Base
  belongs_to :user
  belongs_to :friend, :class_name => "User"
  #This is giving the friendships a relationship with users and friends- thereby joining them together (ie: a joint table)

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
end
