json.set! playlist_song.id do
  json.extract! playlist_song, :playlist_id, :song_id
end