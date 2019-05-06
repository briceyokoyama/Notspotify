json.set! artist.id do
  json.extract! artist, :id, :name
  if artist.avatar.attached?
    json.avatarUrl url_for(artist.avatar)
  end
end