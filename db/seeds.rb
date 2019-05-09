# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'taglib'
require 'open-uri'

ActiveRecord::Base.transaction do

  Song.destroy_all
  Album.destroy_all
  Playlist.destroy_all
  Artist.destroy_all
  PlaylistFollower.destroy_all
  PlaylistSong.destroy_all
  User.destroy_all
  
  dir = Rails.root

  user1 = User.create!({username: "user1", name: "user1name", email: "user1@gmail.com", password: "password" })
  user2 = User.create!({username: "user2", name: "user2name", email: "user2@gmail.com", password: "password" })
  user3 = User.create!({username: "user3", name: "user3name", email: "user3@gmail.com", password: "password" })
  user4 = User.create!({username: "user4", name: "user4name", email: "user4@gmail.com", password: "password" })

  # user1.avatar.attach(io: File.open('app/assets/seed_data/user1_avatar.jpg'), filename: 'avatar.jpg')
  # user2.avatar.attach(io: File.open('app/assets/seed_data/user2_avatar.jpg'), filename: 'avatar.jpg')
  # user3.avatar.attach(io: File.open('app/assets/seed_data/user3_avatar.jpg'), filename: 'avatar.jpg')
  # user4.avatar.attach(io: File.open('app/assets/seed_data/user4_avatar.jpg'), filename: 'avatar.jpg')
  # debugger
  user1.avatar.attach(io: open("https://s3-us-west-1.amazonaws.com/notspotify-pro/user1_avatar.jpg"), filename: 'avatar.jpg')
  user2.avatar.attach(io: open("https://s3-us-west-1.amazonaws.com/notspotify-pro/user2_avatar.jpg"), filename: 'avatar.jpg')
  user3.avatar.attach(io: open("https://s3-us-west-1.amazonaws.com/notspotify-pro/user3_avatar.jpg"), filename: 'avatar.jpg')
  user4.avatar.attach(io: open("https://s3-us-west-1.amazonaws.com/notspotify-pro/user4_avatar.jpg"), filename: 'avatar.jpg')


  artist1 = Artist.create!({name: "Louis La Roche"})
  artist2 = Artist.create!({name: "Trey Songz"})
  artist3 = Artist.create!({name: "Nujabes"})

  artist1.avatar.attach(open('https://s3-us-west-1.amazonaws.com/notspotify-pro/artist1_avatar.jpg'), filename: 'avatar.jpg')
  artist2.avatar.attach(open('https://s3-us-west-1.amazonaws.com/notspotify-pro/artist2_avatar.jpg'), filename: 'avatar.jpg')
  # artist1.avatar.attach(io: File.open(dir + 'storage/artist1_avatar.jpg'), filename: 'avatar.jpg')
  # artist2.avatar.attach(io: File.open(dir + 'storage/artist2_avatar.jpg'), filename: 'avatar.jpg')

  album1 = Album.create!({title: "R E D G I A N T S", artist_id: artist1.id, year: 2016})
  album2 = Album.create!({title: "Singles", artist_id: artist2.id, year: 2018})
  album3 = Album.create!({title: "Singles", artist_id: artist3.id, year: 2014})

  album1.cover.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/album1_cover.jpg'), filename: 'cover.jpg')
  album2.cover.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/album2_cover.jpg'), filename: 'cover.jpg')
  # album1.cover.attach(io: File.open(dir + 'storage/album1_cover.jpg'), filename: 'cover.jpg')
  # album2.cover.attach(io: File.open(dir + 'storage/album2_cover.jpg'), filename: 'cover.jpg')

  song1 = Song.create!({title: "Signs of Life", album_id: album1.id})
  song2 = Song.create!({title: "Dancin' Shoes", album_id: album1.id})
  song3 = Song.create!({title: "Don't Wanna Come Down", album_id: album2.id})
  song4 = Song.create!({title: "First Love", album_id: album2.id})
  song5 = Song.create!({title: "Aruarian Dance", album_id: album3.id})

  song1.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/Louis+La+Roche+-+R+E+D+G+I+A+N+T+S+-+01+Signs+Of+Life+(2013).flac'), filename: 'song.mp3')
  song2.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/Louis+La+Roche+-+R+E+D+G+I+A+N+T+S+-+02+Dancin\'+Shoes+(2014).flac'), filename: 'song.mp3')
  song3.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/Trey+Songz+-+Dont+Wanna+Come+Down.mp3'), filename: 'song.mp3')
  song4.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/Trey+Songz+-+First+Love.mp3'), filename: 'song.mp3')
  song5.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/03+Aruarian+Dance.mp3'), filename: 'song.mp3')

  # song1.src.attach(io: File.open(dir + "/app/assets/seed_data/song1.wav"), filename: 'source.wav')
  # debugger
  # song2.src.attach(io: File.open('app/assets/seed_data/louislaroche-signsoflife.flac'), filename: 'source.flac')
  # song3.src.attach(io: File.open('app/assets/seed_data/treysongz-dontwannacomedown.mp3'), filename: 'source.mp3')
  # song4.src.attach(io: File.open('app/assets/seed_data/treysongz-firstlove.mp3'), filename: 'source.mp3')
  # song1.src.attach(io: File.open(dir + 'storage/louislaroche-dancingshoes.flac'), filename: 'source.jpg')
  # song2.src.attach(io: File.open(dir + 'storage/louislaroche-signsoflife.flac'), filename: 'source.jpg')
  # song3.src.attach(io: File.open(dir + 'storage/treysongz-dontwannacomedown.mp3'), filename: 'source.jpg')
  # song4.src.attach(io: File.open(dir + 'storage/treysongz-firstlove.mp3'), filename: 'source.jpg')

  playlist1 = Playlist.create!({title: "playlist1", user_id: user1.id})
  playlist2 = Playlist.create!({title: "playlist2", user_id: user2.id})
  playlist3 = Playlist.create!({title: "playlist3", user_id: user2.id})
  playlist4 = Playlist.create!({title: "playlist4", user_id: user1.id})

# PLAYLIST SONGS

  # playlist 1
  PlaylistSong.create!(playlist_id: playlist1.id, song_id: song1.id)
  PlaylistSong.create!(playlist_id: playlist1.id, song_id: song3.id)
  PlaylistSong.create!(playlist_id: playlist1.id, song_id: song4.id )
  PlaylistSong.create!(playlist_id: playlist1.id, song_id: song5.id )

  # playlist 2
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song1.id)
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song2.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song5.id )

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