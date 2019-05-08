json.set! playlist_follower.id do
  json.extract! playlist_follower, :playlist_id, :user_id
end