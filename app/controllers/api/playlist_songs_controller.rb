class Api::PlaylistSongsController < ApplicationController

  def index
    @playlist_songs = PlaylistSong.all
  end
end
