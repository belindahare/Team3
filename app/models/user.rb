class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  validates :email, presence: true

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
