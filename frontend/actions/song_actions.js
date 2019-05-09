import * as APIUtil from '../util/song_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";
export const PLAY_SONG = "PLAY_SONG";
export const PAUSE_SONG = "STOP_SONG";
export const NEXT_SONG = "NEXT_SONG";
export const RESUME_SONG = "RESUME_SONG";
export const TOGGLE_RANDOM = "TOGGLE_RANDOM";
export const TOGGLE_LOOP = "TOGGLE_LOOP";

const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  songs
})

const receiveAllSongs = (songs) => ({
  type: RECEIVE_ALL_SONGS,
  songs
})

export const playSong = (payload) => {
  let audio = document.getElementsByClassName('react-audio-player');
  audio[0].setAttribute('src', payload.song.src);
  audio[0].play();
  return (
    {type: PLAY_SONG,
      payload}
  )
}

export const pauseSong = () => {
  let audio = document.getElementsByClassName('react-audio-player');
  audio[0].pause();
  return {type: PAUSE_SONG}
}

export const nextSong = (payload) => {
  let audio = document.getElementsByClassName('react-audio-player');
  audio[0].setAttribute('src', payload.songs[index+1].src);
  audio[0].play();
  return {type: NEXT_SONG}
}

export const resumeSong = (payload) => {
  let audio = document.getElementsByClassName('react-audio-player');
  audio[0].play();
  return (
    {type: RESUME_SONG,
    isPlaying: payload.isPlaying,
    currentSong: payload.currentSong}
  )
}

export const toggleLooping = (isLooping) => {
  return ({
    type: TOGGLE_LOOP,
    isLooping: !isLooping
  })
}

export const toggleRandom = (isRandom) => {
  return ({
    type: TOGGLE_RANDOM,
    isRandom: !isRandom
  })
}



export const fetchSongs = (playlistId) => dispatch => (
  APIUtil.fetchSongs(playlistId)
    .then(songs => dispatch(receiveSongs(songs)))
);

export const fetchAllSongs = () => dispatch => (
  APIUtil.fetchSongs()
    .then(songs => dispatch(receiveAllSongs(songs)))
);