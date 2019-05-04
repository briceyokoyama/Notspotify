# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :session_token, :email, :name, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token

  has_one_attached :avatar

  has_many :playlists,
  class_name: :Playlist,
  foreign_key: :user_id

  has_many :playlist_follower,
  class_name: :PlaylistFollower,
  foreign_key: :user_id,
  dependent: :destroy

  has_many :followed_playlists,
  through: :playlist_follower,
  source: :playlist

  attr_reader :password

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username) || User.find_by(email: username)

    if @user && @user.is_password?(password)
      @user
    else
      return nil
    end
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
