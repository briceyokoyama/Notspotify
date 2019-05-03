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
end
