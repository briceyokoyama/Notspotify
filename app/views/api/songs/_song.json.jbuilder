json.set! song.id do
  json.extract! song, :id, :title, :album_id
  json.source url_for(song.src)
end