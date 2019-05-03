# == Schema Information
#
# Table name: playlist_songs
#
#  id          :bigint           not null, primary key
#  playlist_id :integer          not null
#  song_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistSong < ApplicationRecord
  validates :playlist_id, :song_id, presence: true

  belongs_to :playlist,
  class_name: :Playlist,
  foreign_key: :playlist_id

  belongs_to :song,
  class_name: :Song,
  foreign_key: :song_id
  
end
