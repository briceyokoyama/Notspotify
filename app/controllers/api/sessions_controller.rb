class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password]);

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Username or password incorrect"], status: 404
    end
  end

  def destroy
    if current_user
      logout
    else
      render json: ["You are not logged in"], status: 410
    end
  end
end
