class User < ApplicationRecord
  validates :username, :session_token, :email, :name, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  has_one_attached :avatar

  after_initialize :ensure_session_token

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
