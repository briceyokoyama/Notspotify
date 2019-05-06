json.set! album.id do
  json.extract! album, :id, :title, :artist_id
  if album.cover.attached?
    json.coverUrl url_for(album.cover)
  end
end