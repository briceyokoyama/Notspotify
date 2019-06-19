class Api::SongsController < ApplicationController

  def index
    if params[:playlist_id]
      playlist = Playlist.find(params[:playlist_id])
      @songs = playlist.songs
    elsif params[:search]
      @songs = Song.where('LOWER(title) LIKE ?', "%#{params[:search]}%")
    else
      @songs = Song.all
    end
  end

  def show
    @song = Song.find(params[:id])
  end
end
