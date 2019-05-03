# == Schema Information
#
# Table name: playlists
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
  validates :title, :user_id, presence: true

  has_one_attached :cover

  has_many :playlist_songs,
  class_name: :PlaylistSong,
  foreign_key: :playlist_id

  has_many :playlist_followers,
  class_name: :PlaylistFollower,
  foreign_key: :playlist_id

  has_many :songs,
  through: :playlist_songs,
  source: :song

  has_many :followers,
  through: :playlist_followers,
  source: :follower

end
