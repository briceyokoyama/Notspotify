json.set! playlist.id do
  json.extract! playlist, :id, :title
  if playlist.cover.attached?
    json.coverUrl url_for(playlist.cover)
  else
    json.coverUrl asset_path('default_playlist_cover.png')
  end
  json.creator playlist.creator.username
end