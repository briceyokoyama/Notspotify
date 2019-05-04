# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord
  validates :title, :album_id, presence: true

  has_one_attached :src

  belongs_to :album,
  class_name: :Album,
  foreign_key: :album_id

  has_one :artist,
  through: :album,
  source: :artist

  has_many :playlist_songs,
  class_name: :PlaylistSong,
  foreign_key: :song_id

  has_many :playlists,
  through: :playlist_songs,
  source: :playlist

end
