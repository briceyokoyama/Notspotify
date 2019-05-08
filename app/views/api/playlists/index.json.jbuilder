json.playlists do
  @playlists.each do |playlist|
    json.partial! "api/playlists/playlist", playlist: playlist
  end
end

json.playlistFollowers do
  @playlists.each do |playlist|
    playlist.playlist_followers.each do |follower|
      json.partial! "api/playlists/playlist_follower", playlist_follower: follower
    end
  end
end

json.playlistSongs do
  @playlists.each do |playlist|
    playlist.playlist_songs.each do |song|
      json.partial! "api/playlists/playlist_song", playlist_song: song
    end
  end
end