class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password]);

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid Credentials"], status: 404
    end
  end

  def destroy
    debugger
    if current_user
      logout
    else
      render json: ["Not logged in"], status: 410
    end
  end
end
