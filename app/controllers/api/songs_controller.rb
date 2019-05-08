class Api::SongsController < ApplicationController

  def index
    if params[:playlist_id]
      playlist = Playlist.find(params[:playlist_id])
      @songs = playlist.songs
    else
      @songs = Song.all
    end
  end

  def show
    @song = Song.find(params[:id])
  end
end
