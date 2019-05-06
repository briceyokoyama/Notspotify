class AddYearToAlbums < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :year, :integer, null: false, default: 2019
  end
end
