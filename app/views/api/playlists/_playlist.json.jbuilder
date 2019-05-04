json.set! playlist.id do
  json.extract! playlist, :id, :title, :user_id
end