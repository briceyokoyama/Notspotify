json.set! song.id do
  json.extract! song, :id, :title, :album_id
end