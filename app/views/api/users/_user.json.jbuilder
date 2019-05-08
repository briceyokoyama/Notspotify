json.extract! user, :id, :name, :username, :email
if user.avatar.attached?
  json.avatar url_for(user.avatar)
else
  json.avatar asset_path('default_user_avatar.png')
end