# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.transaction do

  Song.destroy_all
  Album.destroy_all
  Playlist.destroy_all
  Artist.destroy_all
  PlaylistFollower.destroy_all
  PlaylistSong.destroy_all
  User.destroy_all

  user1 = User.create!({username: "user1", name: "user1name", email: "user1@gmail.com", password: "password" })
  user2 = User.create!({username: "user2", name: "user2name", email: "user2@gmail.com", password: "password" })
  user3 = User.create!({username: "user3", name: "user3name", email: "user3@gmail.com", password: "password" })
  user4 = User.create!({username: "user4", name: "user4name", email: "user4@gmail.com", password: "password" })

  artist1 = Artist.create!({name: "artist1"})
  artist2 = Artist.create!({name: "artist2"})

  album1 = Album.create!({title: "album1", artist_id: artist1.id, year: 2011})
  album2 = Album.create!({title: "album2", artist_id: artist2.id, year: 2018})

  song1 = Song.create!({title: "Song1", album_id: album1.id})
  song2 = Song.create!({title: "Song2", album_id: album1.id})
  song3 = Song.create!({title: "Song3", album_id: album2.id})
  song4 = Song.create!({title: "Song4", album_id: album2.id})

  playlist1 = Playlist.create!({title: "playlist1", user_id: user1.id})
  playlist2 = Playlist.create!({title: "playlist2", user_id: user2.id})
  playlist3 = Playlist.create!({title: "playlist3", user_id: user2.id})
  playlist4 = Playlist.create!({title: "playlist4", user_id: user1.id})

# PLAYLIST SONGS

  # playlist 1
  PlaylistSong.create!(playlist_id: playlist1.id, song_id: song1.id)
  PlaylistSong.create!(playlist_id: playlist1.id, song_id: song3.id)
  PlaylistSong.create!(playlist_id: playlist1.id, song_id: song4.id)

  # playlist 2
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song1.id)
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song2.id)

  # playlist 3
  PlaylistSong.create!(playlist_id: playlist3.id, song_id: song1.id)
  PlaylistSong.create!(playlist_id: playlist3.id, song_id: song2.id)
  PlaylistSong.create!(playlist_id: playlist3.id, song_id: song3.id)
  PlaylistSong.create!(playlist_id: playlist3.id, song_id: song4.id)

  # playlist 4
  PlaylistSong.create!(playlist_id: playlist4.id, song_id: song1.id)
  PlaylistSong.create!(playlist_id: playlist4.id, song_id: song2.id)
  PlaylistSong.create!(playlist_id: playlist4.id, song_id: song3.id)
  PlaylistSong.create!(playlist_id: playlist4.id, song_id: song4.id)

# PLAYLIST FOLLOWERS

  # playlist 1
  PlaylistFollower.create!(playlist_id: playlist1.id, user_id: user1.id)
  PlaylistFollower.create!(playlist_id: playlist1.id, user_id: user3.id)
  PlaylistFollower.create!(playlist_id: playlist1.id, user_id: user4.id)

  # playlist 2
  PlaylistFollower.create!(playlist_id: playlist2.id, user_id: user1.id)
  PlaylistFollower.create!(playlist_id: playlist2.id, user_id: user2.id)

  # playlist 3
  PlaylistFollower.create!(playlist_id: playlist3.id, user_id: user1.id)
  PlaylistFollower.create!(playlist_id: playlist3.id, user_id: user2.id)
  PlaylistFollower.create!(playlist_id: playlist3.id, user_id: user3.id)
  PlaylistFollower.create!(playlist_id: playlist3.id, user_id: user4.id)

  # playlist 4
  PlaylistFollower.create!(playlist_id: playlist4.id, user_id: user1.id)
  PlaylistFollower.create!(playlist_id: playlist4.id, user_id: user2.id)
  PlaylistFollower.create!(playlist_id: playlist4.id, user_id: user3.id)
  PlaylistFollower.create!(playlist_id: playlist4.id, user_id: user4.id)

end