class Api::PlaylistSongsController < ApplicationController

  def index
    @playlist_songs = PlaylistSong.all
  end

  def create
    @playlist_song = PlaylistSong.new(playlist_song_params)

    if @playlist_song.save
      render "api/playlist_songs/show"
    else
      render json: @playlist_song.errors, status: 404
    end
  end

  def destroy
    @playlist_song = PlaylistSong.find(params[:id])
    @playlist_song.destroy
    render "api/playlist_songs/show"
  end

  private
  def playlist_song_params
    params.require(:playlist_song).permit(:playlist_id, :song_id)
  end
end
