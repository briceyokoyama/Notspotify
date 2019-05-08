@playlist_followers.each do |playlist_follower|
  json.partial! "api/playlist_followers/playlist_follower", playlist_follower: playlist_follower
end