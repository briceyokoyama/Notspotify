class Api::PlaylistsController < ApplicationController

  def index
    if params[:user_id].nil?
      @playlists = Playlist.all
    elsif params[:userId]
      @playlists = Playlist.includes(:creator, :playlist_songs, :playlist_followers, :songs, :followers).where('user_id = ?', params[:userId])
    else
      user = User.find(params[:user_id])
      @playlists = user.followed_playlists
    end
  end

  def create
    @playlist = Playlist.new(playlist_params)

    if @playlist.save
      PlaylistFollower.create!(playlist_id: @playlist.id, user_id: @playlist.user_id)
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
