class Api::SongsController < ApplicationController

  def index
    playlist = Playlist.find_by(id: params[:id])
    @songs = playlist.songs
  end

  def show
    @song = Song.find(params[:id])
  end

end
