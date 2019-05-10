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
  
  # dir = Rails.root

  user1 = User.create!({username: "b-rad", name: "Brice", email: "brice@gmail.com", password: "password" })
  user2 = User.create!({username: "T-dawg", name: "Tim", email: "tim@gmail.com", password: "password" })
  user3 = User.create!({username: "JFOS", name: "Jinfull", email: "jin@gmail.com", password: "password" })
  user4 = User.create!({username: "AJ", name: "Ajay", email: "ajay@gmail.com", password: "password" })
  user5 = User.create!({username: "Newri", name: "Nuri", email: "nuri@gmail.com", password: "password" })
  user6 = User.create!({username: "Killa Cam", name: "Cameron", email: "cameron@gmail.com", password: "password" })


  user1.avatar.attach(io: open("https://s3-us-west-1.amazonaws.com/notspotify-pro/user-avatars/user1-avatar.jpg"), filename: 'avatar.jpg')
  user2.avatar.attach(io: open("https://s3-us-west-1.amazonaws.com/notspotify-pro/user-avatars/user2-avatar.jpg"), filename: 'avatar.jpg')
  user3.avatar.attach(io: open("https://s3-us-west-1.amazonaws.com/notspotify-pro/user-avatars/user3-avatar.jpg"), filename: 'avatar.jpg')
  user4.avatar.attach(io: open("https://s3-us-west-1.amazonaws.com/notspotify-pro/user-avatars/user4-avatar.jpg"), filename: 'avatar.jpg')
  user5.avatar.attach(io: open("https://s3-us-west-1.amazonaws.com/notspotify-pro/user-avatars/user5-avatar.jpg"), filename: 'avatar.jpg')


  artist1 = Artist.create!({name: "Louis La Roche"})
  artist2 = Artist.create!({name: "Trey Songz"})
  artist3 = Artist.create!({name: "Nujabes"})
  artist4 = Artist.create!({name: "Frank Ocean"})
  artist5 = Artist.create!({name: "Chance The Rapper"})


  artist1.avatar.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/artist-avatars/artist1_avatar.jpg'), filename: 'avatar.jpg')
  artist2.avatar.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/artist-avatars/artist2_avatar.jpg'), filename: 'avatar.jpg')
  artist3.avatar.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/artist-avatars/artist3_avatar.jpg'), filename: 'avatar.jpg')
  artist4.avatar.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/artist-avatars/artist4_avatar.jpg'), filename: 'avatar.jpg')
  artist5.avatar.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/artist-avatars/artist5_avatar.jpg'), filename: 'avatar.jpg')
  

  album1 = Album.create!({title: "R E D G I A N T S", artist_id: artist1.id, year: 2016})
  album2 = Album.create!({title: "Singles", artist_id: artist2.id, year: 2018})
  album3 = Album.create!({title: "Singles", artist_id: artist3.id, year: 2014})
  album4 = Album.create!({title: "Blonde", artist_id: artist4.id, year: 2016})
  album5 = Album.create!({title: "Acid Rap", artist_id: artist5.id, year: 2013})


  album1.cover.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/album-covers/album1_cover.jpg'), filename: 'cover.jpg')
  album2.cover.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/album-covers/album2_cover.jpg'), filename: 'cover.jpg')

  
  album5.cover.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/album-covers/album5_cover.jpg'), filename: 'cover.jpg')


  song1 = Song.create!({title: "Signs of Life", album_id: album1.id})
  song2 = Song.create!({title: "Dancin' Shoes", album_id: album1.id})
  song3 = Song.create!({title: "Don't Wanna Come Down", album_id: album2.id})
  song4 = Song.create!({title: "First Love", album_id: album2.id})
  song5 = Song.create!({title: "Aruarian Dance", album_id: album3.id})


  song1.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/louislaroche-signsoflife.flac'), filename: 'song.mp3')
  song2.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/louislaroche-dancinshoes.flac'), filename: 'song.mp3')
  song3.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/treysongz-dontwannacomedown.mp3'), filename: 'song.mp3')
  song4.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/treysongz-firstlove.mp3'), filename: 'song.mp3')
  song5.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/nujabes-aruariandance.mp3'), filename: 'song.mp3')

  #10 DAY

  song6 = Song.create!({title: 'Good Ass Intro', album_id: album5.id})
  song7 = Song.create!({title: 'Pusha Man', album_id: album5.id})
  song8 = Song.create!({title: 'Cocoa Butter Kisses', album_id: album5.id})
  song9 = Song.create!({title: 'Juice', album_id: album5.id})
  song10 = Song.create!({title: 'Lost', album_id: album5.id})
  song11 = Song.create!({title: 'Everybody\'s Something', album_id: album5.id})
  song12 = Song.create!({title: 'Interlude (That\'s Love)', album_id: album5.id})
  song13 = Song.create!({title: 'Favorite Song', album_id: album5.id})
  song14 = Song.create!({title: 'NaNa', album_id: album5.id})
  song15 = Song.create!({title: 'Smoke Again', album_id: album5.id})
  song16 = Song.create!({title: 'Acid Rain', album_id: album5.id})
  song17 = Song.create!({title: 'Chain Smoker', album_id: album5.id})
  song18 = Song.create!({title: 'Everything\'s Good (Good Ass Outro)', album_id: album5.id})

  song6.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/01+Good+Ass+Intro+(ft.+BJ+The+Chicag.mp3'), filename: 'song.mp3')
  song7.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/02+Pusha+Man+(ft.+Nate+Fox+%26+Lili+K..mp3'), filename: 'song.mp3')
  song8.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/03+Cocoa+Butter+Kisses+(ft.+Vic+Mens.mp3'), filename: 'song.mp3')
  song9.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/04+Juice.mp3'), filename: 'song.mp3')
  song10.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/05+Lost+(ft.+Noname+Gypsy).mp3'), filename: 'song.mp3')
  song11.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/06+Everybody\'s+Something+(ft.+Saba+%26.mp3'), filename: 'song.mp3')
  song12.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/07+Interlude+(That\'s+Love).mp3'), filename: 'song.mp3')
  song13.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/08+Favorite+Song+(ft.+Childish+Gambi.mp3'), filename: 'song.mp3')
  song14.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/09+NaNa+(ft.+Action+Bronson).mp3'), filename: 'song.mp3')
  song15.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/10+Smoke+Again+(ft.+Ab-Soul).mp3'), filename: 'song.mp3')
  song16.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/11+Acid+Rain.mp3'), filename: 'song.mp3')
  song17.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/12+Chain+Smoker.mp3'), filename: 'song.mp3')
  song18.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/13+Everything\'s+Good+(Good+Ass+Outro.mp3'), filename: 'song.mp3')


  artist6 = Artist.create!({name: "Peter, Bjorn & John"})
  artist6.avatar.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/artist-avatars/artist6_avatar.jpg'), filename: 'avatar.jpg')
  album6 = Album.create!({title: "Writer's Block", artist_id: artist6.id, year: 2006})
  album6.cover.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/album-covers/album6_cover.jpg'), filename: 'cover.jpg')

  song19 = Song.create!({title: 'Writer\'s Block', album_id: album6.id})
  song20 = Song.create!({title: 'Objects of My Affection', album_id: album6.id})
  song21 = Song.create!({title: 'Young Folks', album_id: album6.id})
  song22 = Song.create!({title: 'Amsterdam', album_id: album6.id})
  song23 = Song.create!({title: 'Start To Melt', album_id: album6.id})
  song24 = Song.create!({title: 'Up Against the Wall', album_id: album6.id})
  song25 = Song.create!({title: 'Paris 2004', album_id: album6.id})
  song26 = Song.create!({title: 'Let\'s Call It Off', album_id: album6.id})
  song27 = Song.create!({title: 'The Chills', album_id: album6.id})
  song28 = Song.create!({title: 'Roll The Credits', album_id: album6.id})
  song29 = Song.create!({title: 'Poor Cow', album_id: album6.id})

  song19.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Writer\'s+Block/01+Writer\'s+Block.mp3'), filename: 'song.mp3')
  song20.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Writer\'s+Block/02+Objects+Of+My+Affection.mp3'), filename: 'song.mp3')
  song21.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Writer\'s+Block/03+Young+Folks.mp3'), filename: 'song.mp3')
  song22.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Writer\'s+Block/04+Amsterdam.mp3'), filename: 'song.mp3')
  song23.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Writer\'s+Block/05+Start+To+Melt.mp3'), filename: 'song.mp3')
  song24.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Writer\'s+Block/06+Up+Against+The+Wall.mp3'), filename: 'song.mp3')
  song25.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Writer\'s+Block/07+Paris+2004.mp3'), filename: 'song.mp3')
  song26.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Writer\'s+Block/08+Let\'s+Call+It+Off.mp3'), filename: 'song.mp3')
  song27.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Writer\'s+Block/09+The+Chills.mp3'), filename: 'song.mp3')
  song28.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Writer\'s+Block/10+Roll+The+Credits.mp3'), filename: 'song.mp3')
  song29.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Writer\'s+Block/11+Poor+Cow.mp3'), filename: 'song.mp3')
  

  playlist1 = Playlist.create!({title: "some music", user_id: user1.id})
  playlist2 = Playlist.create!({title: "some more music", user_id: user2.id})
  playlist3 = Playlist.create!({title: "10% good music", user_id: user2.id})
  playlist4 = Playlist.create!({title: "...", user_id: user4.id})
  playlist5 = Playlist.create!({title: "Massive Playlist", user_id: user3.id})

# PLAYLIST SONGS

  # playlist 1
  PlaylistSong.create!(playlist_id: playlist1.id, song_id: song1.id)
  PlaylistSong.create!(playlist_id: playlist1.id, song_id: song3.id)
  PlaylistSong.create!(playlist_id: playlist1.id, song_id: song4.id )
  PlaylistSong.create!(playlist_id: playlist1.id, song_id: song5.id )

  # playlist 2
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song1.id)
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song2.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song3.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song4.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song5.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song6.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song7.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song8.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song9.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song10.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song11.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song12.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song13.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song14.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song15.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song16.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song17.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song18.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song19.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song20.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song21.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song22.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song23.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song24.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song25.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song26.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song27.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song28.id )
  PlaylistSong.create!(playlist_id: playlist2.id, song_id: song29.id )


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