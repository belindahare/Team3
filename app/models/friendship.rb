class Friendship < ActiveRecord::Base
  belongs_to :user
  belongs_to :friend, :class_name => "User"
  #This is giving the friendships a relationship with users and friends- thereby joining them together (ie: a joint table)
end
