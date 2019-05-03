# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
  validates :title, :artist_id, presence: true

  has_one_attached :cover

  belongs_to :artist,
  class_name: :Artist,
  foreign_key: :artist_id

  has_many :songs,
  class_name: :Song,
  foreign_key: :album_id
  
end
