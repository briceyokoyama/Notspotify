@artists.each do |artist|
  json.partial! "api/artists/artist", artist: artist
end