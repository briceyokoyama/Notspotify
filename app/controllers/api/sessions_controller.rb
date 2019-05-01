class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], parms[:user][:password]);

    if @user
      login(@user)
    else
      render json: ["Invalid Credentials"], status: 404
    end
  end

  def destroy
    logout
    render json: {}
  end
end
