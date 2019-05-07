class Api::PlaylistsController < ApplicationController

  def index
    @playlists = Playlist.all
  end

  def create
    @playlist = Playlist.new(playlist_params)

    if @playlist.save
      render "api/playlists/show"
    else
      render json: @playlist.errors.full_messages, status: 410
    end
  end

  def show
    @playlist = Playlist.find(params[:id])
  end

  private
  def playlist_params
    params.require(:playlist).permit(:title, :user_id)
  end

end
