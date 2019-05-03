# == Schema Information
#
# Table name: artists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord
  validate :name, presence: true

  has_one_attached :avatar

  has_many :albums,
  class_name: :Album,
  foreign_key: :artist_id

  has_many :songs,
  through: :albums,
  source: :songs

end
