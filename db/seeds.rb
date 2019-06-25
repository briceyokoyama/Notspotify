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

  # Song.destroy_all
  # Album.destroy_all
  # Playlist.destroy_all
  # Artist.destroy_all
  # PlaylistFollower.destroy_all
  # PlaylistSong.destroy_all
  # User.destroy_all

  # user1 = User.create!({username: "b-rad", name: "Brice", email: "brice@gmail.com", password: "password" })
  # user2 = User.create!({username: "T-dawg", name: "Tim", email: "tim@gmail.com", password: "password" })
  # user3 = User.create!({username: "JFOS", name: "Jinfull", email: "jin@gmail.com", password: "password" })
  # user4 = User.create!({username: "AJ", name: "Ajay", email: "ajay@gmail.com", password: "password" })
  # user5 = User.create!({username: "Newri", name: "Nuri", email: "nuri@gmail.com", password: "password" })
  # user6 = User.create!({username: "Killa Cam", name: "Cameron", email: "cameron@gmail.com", password: "password" })


  # user1.avatar.attach(io: open("https://s3-us-west-1.amazonaws.com/notspotify-pro/user-avatars/user1-avatar.jpg"), filename: 'avatar.jpg')
  # user2.avatar.attach(io: open("https://s3-us-west-1.amazonaws.com/notspotify-pro/user-avatars/user2-avatar.jpg"), filename: 'avatar.jpg')
  # user3.avatar.attach(io: open("https://s3-us-west-1.amazonaws.com/notspotify-pro/user-avatars/user3-avatar.jpg"), filename: 'avatar.jpg')
  # user4.avatar.attach(io: open("https://s3-us-west-1.amazonaws.com/notspotify-pro/user-avatars/user4-avatar.jpg"), filename: 'avatar.jpg')
  # user5.avatar.attach(io: open("https://s3-us-west-1.amazonaws.com/notspotify-pro/user-avatars/user5-avatar.jpg"), filename: 'avatar.jpg')


  # artist1 = Artist.create!({name: "Louis La Roche"})
  # artist2 = Artist.create!({name: "Trey Songz"})
  # artist3 = Artist.create!({name: "Nujabes"})
  # artist4 = Artist.create!({name: "Frank Ocean"})
  # artist5 = Artist.create!({name: "Chance The Rapper"})
  # artist6 = Artist.create!({name: "Peter, Bjorn & John"})
  artist7 = Artist.create!({name: "Fine Young Cannibals"})
  artist8 = Artist.create!({name: "Vampire Weekend"})
  artist9 = Artist.create!({name: "Carly Rae Jepsen"})
  artist10 = Artist.create!({name: "Lupe Fiasco"})
  

  # artist1.avatar.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/artist-avatars/artist1_avatar.jpg'), filename: 'avatar.jpg')
  # artist2.avatar.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/artist-avatars/artist2_avatar.jpg'), filename: 'avatar.jpg')
  # artist3.avatar.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/artist-avatars/artist3_avatar.jpg'), filename: 'avatar.jpg')
  # artist4.avatar.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/artist-avatars/artist4_avatar.jpg'), filename: 'avatar.jpg')
  # artist5.avatar.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/artist-avatars/artist5_avatar.jpg'), filename: 'avatar.jpg')
  # artist6.avatar.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/artist-avatars/artist6_avatar.jpg'), filename: 'avatar.jpg')
  artist7.avatar.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/artist-avatars/artist7_avatar.jpg'), filename: 'avatar.jpg')
  artist8.avatar.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/artist-avatars/artist8_avatar.jpg'), filename: 'avatar.jpg')
  artist9.avatar.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/artist-avatars/artist9_avatar.jpg'), filename: 'avatar.jpg')
  artist10.avatar.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/artist-avatars/artist10_avatar.jpg'), filename: 'avatar.jpg')
  artist11 = Artist.find_by(name: "Frank Ocean")

  # album1 = Album.create!({title: "R E D G I A N T S", artist_id: artist1.id, year: 2016})
  # album2 = Album.create!({title: "Singles", artist_id: artist2.id, year: 2018})
  # album3 = Album.create!({title: "Singles", artist_id: artist3.id, year: 2014})
  # album4 = Album.create!({title: "Blonde", artist_id: artist4.id, year: 2016})
  # album5 = Album.create!({title: "Acid Rap", artist_id: artist5.id, year: 2013})
  # album6 = Album.create!({title: "Writer's Block", artist_id: artist6.id, year: 2006})
  album7 = Album.create!({title: "The Raw & The Cooked", artist_id: artist7.id, year: 1988})
  album8 = Album.create!({title: "Vampire Weekend", artist_id: artist8.id, year: 2008})
  album9 = Album.create!({title: "Emotion", artist_id: artist9.id, year: 2015})
  album10 = Album.create!({title: "The Cool", artist_id: artist10.id, year: 2007})
  album11 = Album.create!({title: "Channel Orange", artist_id: artist11.id, year: 2012})
  album12 = Album.create!({title: "Food and Liquor", artist_id: artist10.id, year: 2006})


  # album1.cover.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/album-covers/album1_cover.jpg'), filename: 'cover.jpg')
  # album2.cover.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/album-covers/album2_cover.jpg'), filename: 'cover.jpg')


  # album5.cover.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/album-covers/album5_cover.jpg'), filename: 'cover.jpg')
  # album6.cover.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/album-covers/album9_cover.jpg'), filename: 'cover.jpg')
  album7.cover.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/album-covers/album7_cover.jpg'), filename: 'cover.jpg')
  album8.cover.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/album-covers/album8_cover.jpg'), filename: 'cover.jpg')
  album9.cover.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/album-covers/album9_cover.jpg'), filename: 'cover.jpg')
  album10.cover.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/album-covers/album10_cover.jpg'), filename: 'cover.jpg')
  album11.cover.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/album-covers/album11_cover.jpg'), filename: 'cover.jpg')
  album12.cover.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/album-covers/album12_cover.jpg'), filename: 'cover.jpg')
  

  # song1 = Song.create!({title: "Signs of Life", album_id: album1.id})
  # song2 = Song.create!({title: "Dancin' Shoes", album_id: album1.id})
  # song3 = Song.create!({title: "Don't Wanna Come Down", album_id: album2.id})
  # song4 = Song.create!({title: "First Love", album_id: album2.id})
  # song5 = Song.create!({title: "Aruarian Dance", album_id: album3.id})


  # song1.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/louislaroche-signsoflife.flac'), filename: 'song.mp3')
  # song2.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/louislaroche-dancinshoes.flac'), filename: 'song.mp3')
  # song3.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/treysongz-dontwannacomedown.mp3'), filename: 'song.mp3')
  # song4.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/treysongz-firstlove.mp3'), filename: 'song.mp3')
  # song5.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/nujabes-aruariandance.mp3'), filename: 'song.mp3')

  # ACID RAP

  # song6 = Song.create!({title: 'Good Ass Intro', album_id: album5.id})
  # song7 = Song.create!({title: 'Pusha Man', album_id: album5.id})
  # song8 = Song.create!({title: 'Cocoa Butter Kisses', album_id: album5.id})
  # song9 = Song.create!({title: 'Juice', album_id: album5.id})
  # song10 = Song.create!({title: 'Lost', album_id: album5.id})
  # song11 = Song.create!({title: 'Everybody\'s Something', album_id: album5.id})
  # song12 = Song.create!({title: 'Interlude (That\'s Love)', album_id: album5.id})
  # song13 = Song.create!({title: 'Favorite Song', album_id: album5.id})
  # song14 = Song.create!({title: 'NaNa', album_id: album5.id})
  # song15 = Song.create!({title: 'Smoke Again', album_id: album5.id})
  # song16 = Song.create!({title: 'Acid Rain', album_id: album5.id})
  # song17 = Song.create!({title: 'Chain Smoker', album_id: album5.id})
  # song18 = Song.create!({title: 'Everything\'s Good (Good Ass Outro)', album_id: album5.id})

  # song6.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/01+Good+Ass+Intro+(ft.+BJ+The+Chicag.mp3'), filename: 'song.mp3')
  # song7.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/02+Pusha+Man+(ft.+Nate+Fox+%26+Lili+K..mp3'), filename: 'song.mp3')
  # song8.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/03+Cocoa+Butter+Kisses+(ft.+Vic+Mens.mp3'), filename: 'song.mp3')
  # song9.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/04+Juice.mp3'), filename: 'song.mp3')
  # song10.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/05+Lost+(ft.+Noname+Gypsy).mp3'), filename: 'song.mp3')
  # song11.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/06+Everybody\'s+Something+(ft.+Saba+%26.mp3'), filename: 'song.mp3')
  # song12.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/07+Interlude+(That\'s+Love).mp3'), filename: 'song.mp3')
  # song13.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/08+Favorite+Song+(ft.+Childish+Gambi.mp3'), filename: 'song.mp3')
  # song14.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/09+NaNa+(ft.+Action+Bronson).mp3'), filename: 'song.mp3')
  # song15.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/10+Smoke+Again+(ft.+Ab-Soul).mp3'), filename: 'song.mp3')
  # song16.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/11+Acid+Rain.mp3'), filename: 'song.mp3')
  # song17.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/12+Chain+Smoker.mp3'), filename: 'song.mp3')
  # song18.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Acid+Rap/13+Everything\'s+Good+(Good+Ass+Outro.mp3'), filename: 'song.mp3')

  # WRITER'S BLOCK

  # song19 = Song.create!({title: 'Writer\'s Block', album_id: album6.id})
  # song20 = Song.create!({title: 'Objects of My Affection', album_id: album6.id})
  # song21 = Song.create!({title: 'Young Folks', album_id: album6.id})
  # song22 = Song.create!({title: 'Amsterdam', album_id: album6.id})
  # song23 = Song.create!({title: 'Start To Melt', album_id: album6.id})
  # song24 = Song.create!({title: 'Up Against the Wall', album_id: album6.id})
  # song25 = Song.create!({title: 'Paris 2004', album_id: album6.id})
  # song26 = Song.create!({title: 'Let\'s Call It Off', album_id: album6.id})
  # song27 = Song.create!({title: 'The Chills', album_id: album6.id})
  # song28 = Song.create!({title: 'Roll The Credits', album_id: album6.id})
  # song29 = Song.create!({title: 'Poor Cow', album_id: album6.id})

  # song19.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Writer\'s+Block/01+Writer\'s+Block.mp3'), filename: 'song.mp3')
  # song20.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Writer\'s+Block/02+Objects+Of+My+Affection.mp3'), filename: 'song.mp3')
  # song21.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Writer\'s+Block/03+Young+Folks.mp3'), filename: 'song.mp3')
  # song22.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Writer\'s+Block/04+Amsterdam.mp3'), filename: 'song.mp3')
  # song23.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Writer\'s+Block/05+Start+To+Melt.mp3'), filename: 'song.mp3')
  # song24.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Writer\'s+Block/06+Up+Against+The+Wall.mp3'), filename: 'song.mp3')
  # song25.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Writer\'s+Block/07+Paris+2004.mp3'), filename: 'song.mp3')
  # song26.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Writer\'s+Block/08+Let\'s+Call+It+Off.mp3'), filename: 'song.mp3')
  # song27.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Writer\'s+Block/09+The+Chills.mp3'), filename: 'song.mp3')
  # song28.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Writer\'s+Block/10+Roll+The+Credits.mp3'), filename: 'song.mp3')
  # song29.src.attach(io: open('https://s3-us-west-1.amazonaws.com/notspotify-pro/song-src/Writer\'s+Block/11+Poor+Cow.mp3'), filename: 'song.mp3')
  
  song30 = Song.create!({title: 'She Drives Me Crazy', album_id: album7.id})
  
  song30.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/01.She+Drives+Me+Crazy.mp3'), filename: 'song.mp3')

  song31 = Song.create!({title: 'Mansard Roof', album_id: album8.id})
  song32 = Song.create!({title: 'Oxford Comma', album_id: album8.id})
  song33 = Song.create!({title: 'A-Punk', album_id: album8.id})
  song34 = Song.create!({title: 'Cape Cod Kwassa Kwassa', album_id: album8.id})
  song35 = Song.create!({title: 'M79', album_id: album8.id})
  song36 = Song.create!({title: 'Campus', album_id: album8.id})
  song37 = Song.create!({title: 'Bryn', album_id: album8.id})
  song38 = Song.create!({title: 'One (Blake\'s Got A New Face)', album_id: album8.id})
  song39 = Song.create!({title: 'I Stand Corrected', album_id: album8.id})
  song40 = Song.create!({title: 'Walcott', album_id: album8.id})
  song41 = Song.create!({title: 'The Kids Don\'t Stand A Chance', album_id: album8.id})

  song31.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Vampire+Weekend/01+-+Mansard+Roof.mp3'), filename: 'song.mp3')
  song32.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Vampire+Weekend/02+-+Oxford+Comma.mp3'), filename: 'song.mp3')
  song33.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Vampire+Weekend/03+-+A-Punk.mp3'), filename: 'song.mp3')
  song34.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Vampire+Weekend/04+-+Cape+Cod+Kwassa+Kwassa.mp3'), filename: 'song.mp3')
  song35.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Vampire+Weekend/05+-+M79.mp3'), filename: 'song.mp3')
  song36.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Vampire+Weekend/06+-+Campus.mp3'), filename: 'song.mp3')
  song37.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Vampire+Weekend/07+-+Bryn.mp3'), filename: 'song.mp3')
  song38.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Vampire+Weekend/08+-+One+(Blake\'s+Got+A+New+Face).mp3'), filename: 'song.mp3')
  song39.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Vampire+Weekend/09+-+I+Stand+Corrected.mp3'), filename: 'song.mp3')
  song40.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Vampire+Weekend/10+-+Walcott.mp3'), filename: 'song.mp3')
  song41.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Vampire+Weekend/11+-+The+Kids+Don\'t+Stand+A+Chance.mp3'), filename: 'song.mp3')

  song42 = Song.create!({title: 'Run Away with Me', album_id: album9.id})
  song43 = Song.create!({title: 'Emotion', album_id: album9.id})
  song44 = Song.create!({title: 'I Really Like You', album_id: album9.id})
  song45 = Song.create!({title: 'Gimmie Love', album_id: album9.id})
  song46 = Song.create!({title: 'All That', album_id: album9.id})
  song47 = Song.create!({title: 'Boy Problems', album_id: album9.id})
  song48 = Song.create!({title: 'Making The Most of The Night', album_id: album9.id})
  song49 = Song.create!({title: 'Your Type', album_id: album9.id})
  song50 = Song.create!({title: 'Let\'s Get Lost', album_id: album9.id})
  song51 = Song.create!({title: 'LA Hallucinations', album_id: album9.id})
  song52 = Song.create!({title: 'Warm Blood', album_id: album9.id})
  song53 = Song.create!({title: 'When I Needed You', album_id: album9.id})
  song54 = Song.create!({title: 'Black Heart', album_id: album9.id})
  song55 = Song.create!({title: 'I Didn\'t Just Come Here To Dance', album_id: album9.id})
  song56 = Song.create!({title: 'Favourite Clour', album_id: album9.id})
  song57 = Song.create!({title: 'Never Get to Hold You', album_id: album9.id})
  song58 = Song.create!({title: 'Love Again', album_id: album9.id})
  song59 = Song.create!({title: 'I Really Like You (Liam Keegan Remix)', album_id: album9.id})

  song42.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Emotion/01+Run+Away+With+Me.mp3'), filename: 'song.mp3')
  song43.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Emotion/02+Emotion.mp3'), filename: 'song.mp3')
  song44.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Emotion/03+I+Really+Like+You.mp3'), filename: 'song.mp3')
  song45.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Emotion/04+Gimmie+Love.mp3'), filename: 'song.mp3')
  song46.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Emotion/05+All+That.mp3'), filename: 'song.mp3')
  song47.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Emotion/06+Boy+Problems.mp3'), filename: 'song.mp3')
  song48.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Emotion/07+Making+The+Most+Of+The+Night.mp3'), filename: 'song.mp3')
  song49.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Emotion/08+Your+Type.mp3'), filename: 'song.mp3')
  song50.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Emotion/09+Let\'s+Get+Lost.mp3'), filename: 'song.mp3')
  song51.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Emotion/10+LA+Hallucinations.mp3'), filename: 'song.mp3')
  song52.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Emotion/11+Warm+Blood.mp3'), filename: 'song.mp3')
  song53.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Emotion/12+When+I+Needed+You.mp3'), filename: 'song.mp3')
  song54.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Emotion/13+Black+Heart.mp3'), filename: 'song.mp3')
  song55.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Emotion/14+I+Didn\'t+Just+Come+Here+To+Dance.mp3'), filename: 'song.mp3')
  song56.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Emotion/15+Favourite+Colour.mp3'), filename: 'song.mp3')
  song57.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Emotion/16+Never+Get+to+Hold+You.mp3'), filename: 'song.mp3')
  song58.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Emotion/17+Love+Again.mp3'), filename: 'song.mp3')
  song59.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Emotion/18+I+Really+Like+You+(Liam+Keegan+Re.mp3'), filename: 'song.mp3')

  song60 = Song.create!({title: 'Go Go Gadget Flow', album_id: album10.id})
  song61 = Song.create!({title: 'The Coolest', album_id: album10.id})
  song62 = Song.create!({title: 'Superstar', album_id: album10.id})
  song63 = Song.create!({title: 'Paris, Tokyo', album_id: album10.id})
  song64 = Song.create!({title: 'Gold Watch', album_id: album10.id})
  song65 = Song.create!({title: 'Hip-Hop Saved My Life', album_id: album10.id})

  song60.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/The+Cool/03+Go+Go+Gadget+Flow.mp3'), filename: 'song.mp3')
  song61.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/The+Cool/04+The+Coolest.mp3'), filename: 'song.mp3')
  song62.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/The+Cool/05+Superstar+(featuring+Matthew+Santos).mp3'), filename: 'song.mp3')
  song63.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/The+Cool/06+Paris%2C+Tokyo.mp3'), filename: 'song.mp3')
  song64.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/The+Cool/08+Gold+Watch.mp3'), filename: 'song.mp3')
  song65.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/The+Cool/09+Hip-Hop+Saved+My+Life+(featuring+Nikki+Jean).mp3'), filename: 'song.mp3')

  song66 = Song.create!({title: 'Start', album_id: album11.id})
  song67 = Song.create!({title: 'Thinkin Bout You', album_id: album11.id})
  song68 = Song.create!({title: 'Fertilizer', album_id: album11.id})
  song69 = Song.create!({title: 'Sierra Leone', album_id: album11.id})
  song70 = Song.create!({title: 'Sweet Life', album_id: album11.id})
  song71 = Song.create!({title: 'Not Just Money', album_id: album11.id})
  song72 = Song.create!({title: 'Super Rich Kids', album_id: album11.id})
  song73 = Song.create!({title: 'Pilot Jones', album_id: album11.id})
  song74 = Song.create!({title: 'Crack Rock', album_id: album11.id})
  song75 = Song.create!({title: 'Pyramids', album_id: album11.id})
  song76 = Song.create!({title: 'Lost', album_id: album11.id})
  song77 = Song.create!({title: 'White', album_id: album11.id})
  song78 = Song.create!({title: 'Monks', album_id: album11.id})
  song79 = Song.create!({title: 'Bad Religion', album_id: album11.id})
  song80 = Song.create!({title: 'Pink Matter', album_id: album11.id})
  song81 = Song.create!({title: 'Forrest Gump', album_id: album11.id})
  song82 = Song.create!({title: 'End', album_id: album11.id})

  song66.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Channel+Orange/01+Start.mp3'), filename: 'song.mp3')
  song67.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Channel+Orange/02+Thinkin+Bout+You.mp3'), filename: 'song.mp3')
  song68.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Channel+Orange/03+Fertilizer.mp3'), filename: 'song.mp3')
  song69.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Channel+Orange/04+Sierra+Leone.mp3'), filename: 'song.mp3')
  song70.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Channel+Orange/05+Sweet+Life.mp3'), filename: 'song.mp3')
  song71.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Channel+Orange/06+Not+Just+Money.mp3'), filename: 'song.mp3')
  song72.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Channel+Orange/07+Super+Rich+Kids+(feat.+Earl+Sweatshirt).mp3'), filename: 'song.mp3')
  song73.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Channel+Orange/08+Pilot+Jones.mp3'), filename: 'song.mp3')
  song74.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Channel+Orange/09+Crack+Rock.mp3'), filename: 'song.mp3')
  song75.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Channel+Orange/10+Pyramids.mp3'), filename: 'song.mp3')
  song76.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Channel+Orange/11+Lost.mp3'), filename: 'song.mp3')
  song77.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Channel+Orange/12+White+(feat.+John+Mayer).mp3'), filename: 'song.mp3')
  song78.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Channel+Orange/13+Monks.mp3'), filename: 'song.mp3')
  song79.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Channel+Orange/14+Bad+Religion.mp3'), filename: 'song.mp3')
  song80.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Channel+Orange/15+Pink+Matter+(feat.+Andre%CC%81+3000).mp3'), filename: 'song.mp3')
  song81.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Channel+Orange/16+Forrest+Gump.mp3'), filename: 'song.mp3')
  song82.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Channel+Orange/17+End.mp3'), filename: 'song.mp3')

  song83 = Song.create!({title: 'Intro', album_id: album12.id})
  song84 = Song.create!({title: 'Real', album_id: album12.id})
  song85 = Song.create!({title: 'Just Might Be OK', album_id: album12.id})
  song86 = Song.create!({title: 'Kick, Push', album_id: album12.id})
  song87 = Song.create!({title: 'I Gotcha', album_id: album12.id})
  song88 = Song.create!({title: 'The Instrumental', album_id: album12.id})
  song89 = Song.create!({title: 'He Say She Say', album_id: album12.id})
  song90 = Song.create!({title: 'Sunshine', album_id: album12.id})
  song91 = Song.create!({title: 'Daydreamin', album_id: album12.id})
  song92 = Song.create!({title: 'The Cool', album_id: album12.id})
  song93 = Song.create!({title: 'Hurt Me Soul', album_id: album12.id})
  song94 = Song.create!({title: 'Pressure', album_id: album12.id})
  song95 = Song.create!({title: 'American Terrorist', album_id: album12.id})
  song96 = Song.create!({title: 'The Emperor\'s Soundtrack', album_id: album12.id})
  song97 = Song.create!({title: 'Kick, Push II', album_id: album12.id})
  song98 = Song.create!({title: 'Outro', album_id: album12.id})

  song83.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Food+and+Liquor/01-lupe_fiasco-intro.mp3'), filename: 'song.mp3')
  song84.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Food+and+Liquor/02-lupe_fiasco-real_f._sarah_green.mp3'), filename: 'song.mp3')
  song85.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Food+and+Liquor/03-lupe_fiasco-just_might_be_ok_f._gemini.mp3'), filename: 'song.mp3')
  song86.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Food+and+Liquor/04-lupe_fiasco-kick_push.mp3'), filename: 'song.mp3')
  song87.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Food+and+Liquor/05-lupe_fiasco-i_gotcha.mp3'), filename: 'song.mp3')
  song88.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Food+and+Liquor/06-lupe_fiasco-the_instrumental_f._jonah_matranga.mp3'), filename: 'song.mp3')
  song89.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Food+and+Liquor/07-lupe_fiasco-he_say_she_say_f._gemini_and_sarah_green.mp3'), filename: 'song.mp3')
  song90.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Food+and+Liquor/08-lupe_fiasco-sunshine.mp3'), filename: 'song.mp3')
  song91.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Food+and+Liquor/09-lupe_fiasco-daydreamin_f._jill_scott.mp3'), filename: 'song.mp3')
  song92.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Food+and+Liquor/10-lupe_fiasco-cool.mp3'), filename: 'song.mp3')
  song93.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Food+and+Liquor/11-lupe_fiasco-hurt_me_soul.mp3'), filename: 'song.mp3')
  song94.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Food+and+Liquor/12-lupe_fiasco-pressure_f._jay-z.mp3'), filename: 'song.mp3')
  song95.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Food+and+Liquor/13-lupe_fiasco-american_terrorist_f._matthew_santos.mp3'), filename: 'song.mp3')
  song96.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Food+and+Liquor/14-lupe_fiasco-the_emperors_soundtrack.mp3'), filename: 'song.mp3')
  song97.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Food+and+Liquor/15-lupe_fiasco-kick_push_ii.mp3'), filename: 'song.mp3')
  song98.src.attach(io: open('https://notspotify-pro.s3-us-west-1.amazonaws.com/song-src/Food+and+Liquor/16-lupe_fiasco-outro.mp3'), filename: 'song.mp3')

  # playlist1 = Playlist.create!({title: "some music", user_id: user1.id})
  # playlist2 = Playlist.create!({title: "some more music", user_id: user2.id})
  # playlist3 = Playlist.create!({title: "10% good music", user_id: user2.id})
  # playlist4 = Playlist.create!({title: "...", user_id: user4.id})
  # playlist5 = Playlist.create!({title: "Massive Playlist", user_id: user3.id})

# PLAYLIST SONGS

  # playlist 1
  # PlaylistSong.create!(playlist_id: playlist1.id, song_id: song1.id)
  # PlaylistSong.create!(playlist_id: playlist1.id, song_id: song3.id)
  # PlaylistSong.create!(playlist_id: playlist1.id, song_id: song4.id )
  # PlaylistSong.create!(playlist_id: playlist1.id, song_id: song5.id )

  # playlist 2
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song1.id)
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song2.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song3.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song4.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song5.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song6.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song7.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song8.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song9.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song10.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song11.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song12.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song13.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song14.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song15.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song16.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song17.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song18.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song19.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song20.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song21.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song22.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song23.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song24.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song25.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song26.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song27.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song28.id )
  # PlaylistSong.create!(playlist_id: playlist2.id, song_id: song29.id )


  # playlist 3
  # PlaylistSong.create!(playlist_id: playlist3.id, song_id: song1.id)
  # PlaylistSong.create!(playlist_id: playlist3.id, song_id: song2.id)
  # PlaylistSong.create!(playlist_id: playlist3.id, song_id: song3.id)
  # PlaylistSong.create!(playlist_id: playlist3.id, song_id: song4.id)

  # playlist 4
  # PlaylistSong.create!(playlist_id: playlist4.id, song_id: song1.id)
  # PlaylistSong.create!(playlist_id: playlist4.id, song_id: song2.id)
  # PlaylistSong.create!(playlist_id: playlist4.id, song_id: song3.id)
  # PlaylistSong.create!(playlist_id: playlist4.id, song_id: song4.id)

# PLAYLIST FOLLOWERS

  # playlist 1
  # PlaylistFollower.create!(playlist_id: playlist1.id, user_id: user1.id)
  # PlaylistFollower.create!(playlist_id: playlist1.id, user_id: user3.id)
  # PlaylistFollower.create!(playlist_id: playlist1.id, user_id: user4.id)

  # playlist 2
  # PlaylistFollower.create!(playlist_id: playlist2.id, user_id: user1.id)
  # PlaylistFollower.create!(playlist_id: playlist2.id, user_id: user2.id)

  # playlist 3
  # PlaylistFollower.create!(playlist_id: playlist3.id, user_id: user1.id)
  # PlaylistFollower.create!(playlist_id: playlist3.id, user_id: user2.id)
  # PlaylistFollower.create!(playlist_id: playlist3.id, user_id: user3.id)
  # PlaylistFollower.create!(playlist_id: playlist3.id, user_id: user4.id)

  # playlist 4
  # PlaylistFollower.create!(playlist_id: playlist4.id, user_id: user1.id)
  # PlaylistFollower.create!(playlist_id: playlist4.id, user_id: user2.id)
  # PlaylistFollower.create!(playlist_id: playlist4.id, user_id: user3.id)
  # PlaylistFollower.create!(playlist_id: playlist4.id, user_id: user4.id)

end