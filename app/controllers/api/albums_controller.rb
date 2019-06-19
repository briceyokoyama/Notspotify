class Api::AlbumsController < ApplicationController

  def index
    if params[:search]
      @albums = Album.where('LOWER(title) LIKE ?', "%#{params[:search]}%")
    else
      @albums = Album.all
    end
  end

  def show
    @album = Album.find(params[:id])
  end

end
