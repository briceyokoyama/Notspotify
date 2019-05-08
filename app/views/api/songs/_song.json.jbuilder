json.set! song.id do
  json.extract! song, :id, :title, :album_id
  json.artist song.artist.name
  json.album song.album.title
  if song.src.attached?
    json.src url_for(song.src)
  else
    json.src asset_path('default_song_src.wav')
  end
end