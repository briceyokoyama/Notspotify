# == Schema Information
#
# Table name: playlist_followers
#
#  id          :bigint           not null, primary key
#  playlist_id :integer
#  user_id     :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistFollower < ApplicationRecord
  validates :playlist_id, :user_id, presence: true

  belongs_to :playlist,
  class_name: :PlayList,
  foreign_key: :playlist_id

  belongs_to :follower,
  class_name: :User,
  foreign_key: :user_id
end
