json.playlists do
  @playlists.each do |playlist|
    json.partial! "api/playlists/playlist", playlist: playlist
  end
end