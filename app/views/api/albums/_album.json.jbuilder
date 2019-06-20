json.set! album.id do
  json.extract! album, :id, :title, :artist_id
  if album.cover.attached?
    json.coverUrl url_for(album.cover)
  else
    json.coverUrl asset_path('default_album_cover.png')
  end
  json.length album.songs.length
  json.artist album.artist.name
end