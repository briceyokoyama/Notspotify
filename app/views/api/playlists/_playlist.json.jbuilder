json.set! playlist.id do
  json.extract! playlist, :id, :title, :user_id
  if playlist.cover.attached?
    json.coverUrl url_for(playlist.cover)
  else
    if playlist.songs.length > 0 && playlist.songs.last.album.cover.attached?
      json.coverUrl url_for(playlist.songs.last.album.cover)
    else
      json.coverUrl asset_path('default_playlist_cover.png')
    end
  end
  json.creator playlist.creator.username
end