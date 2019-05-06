@albums.each do |album|
  json.partial! "api/albums/album", album: album
end