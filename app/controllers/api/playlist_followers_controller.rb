class Api::PlaylistFollowersController < ApplicationController

  def index
    @playlist_followers = PlaylistFollower.all
  end
end
