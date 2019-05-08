json.playlist do
  json.partial! "api/playlists/playlist", playlist: @playlist
end

json.songs do
  @playlist.songs.each do |song|
    json.partial! "api/songs/song", song: song
  end
end

json.playlistSongs do
  @playlist.playlist_songs.each do |song|
    json.partial! "api/playlists/playlist_song", playlist_song: song
  end
end