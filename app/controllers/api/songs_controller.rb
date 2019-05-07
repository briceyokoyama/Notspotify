class Api::SongsController < ApplicationController

  def index
    debugger;
    playlist = Playlist.find(params[:playlist_id])
    @songs = playlist.songs
  end

  def show
    @song = Song.find(params[:id])
  end

end
