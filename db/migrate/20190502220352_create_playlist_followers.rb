class CreatePlaylistFollowers < ActiveRecord::Migration[5.2]
  def change
    create_table :playlist_followers do |t|
      t.integer :playlist_id
      t.integer :user_id

      t.timestamps
    end
  end
end
