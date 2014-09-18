class AddEmailToFriendships < ActiveRecord::Migration
  def change
    add_column :friendships, :email, :string
  end
end
