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
  let audio = document.getElementsByClassName('react-audio-player')[0];
  audio.setAttribute('src', payload.song.src);
  audio.play();
  audio.onloadedmetadata = function() {
    let durationEl = document.getElementById('song-duration');
    let minutes = Math.floor(audio.duration/60);
    let seconds = Math.floor(audio.duration%60);
    durationEl.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  return (
    {
      type: PLAY_SONG,
      payload: payload
    }
  )
}

export const pauseSong = () => {
  let audio = document.getElementsByClassName('react-audio-player');
  audio[0].pause();
  return {type: PAUSE_SONG}
}

export const nextSong = ({songs, index, looping, random}) => {
  let audio = document.getElementsByClassName('react-audio-player');
  let newIndex = index + 1;
  if (looping) {
    if ((index + 1) === songs.length) {
      newIndex = 0;
    }
  }
  if (random) {
    newIndex = Math.floor(songs.length*Math.random());

  }

  audio[0].setAttribute('src', songs[newIndex].src);
  audio[0].play();
  return (
    {
      type: NEXT_SONG,
      index: newIndex,
      nextSong: {id: songs[newIndex].id, duration: audio[0].duration}
    }
  )
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

export const previousSong = (prevSong) => {
  
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

export const searchSongs = (query) => dispatch => (
  APIUtil.searchSongs(query)
    .then(songs => dispatch(receiveSongs(songs)))
);

export const fetchAllSongs = () => dispatch => (
  APIUtil.fetchSongs()
    .then(songs => dispatch(receiveAllSongs(songs)))
);