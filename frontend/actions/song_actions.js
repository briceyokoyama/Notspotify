import * as APIUtil from '../util/song_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";
export const PLAY_SONG = "PLAY_SONG";
export const PAUSE_SONG = "STOP_SONG";
export const PREVIOUS_SONG = "PREVIOUS_SONG";
export const NEXT_SONG = "NEXT_SONG";
export const RESUME_SONG = "RESUME_SONG";
export const TOGGLE_RANDOM = "TOGGLE_RANDOM";
export const TOGGLE_LOOP = "TOGGLE_LOOP";
export const SET_VOLUME = "SET_VOLUME";

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

export const nextSong = ({songs, index, looping, random, isPlaying}) => {
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
  var currTime = document.getElementById('song-current-time')
  currTime.innerText = '0:00';

  if (isPlaying) {
    audio[0].play();
  }
  
  return (
    {
      type: NEXT_SONG,
      index: newIndex,
      nextSong: {id: songs[newIndex].id},
      currSong: index
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

export const previousSong = ({prevIndices, songs, isPlaying}) => {
  let audio = document.getElementsByClassName('react-audio-player');
  let currTime = audio[0].currentTime;
  currTime = document.getElementById('song-current-time')
  currTime.innerText = '0:00';

  if (currTime < 2 && prevIndices.length > 0) {
    let newIndex = prevIndices[prevIndices.length-1]
    audio[0].setAttribute('src', songs[newIndex].src);

    if (isPlaying) {
      audio[0].play();
    }

    return (
      {
        type: PREVIOUS_SONG,
        index: newIndex,
        nextSong: {id: songs[newIndex].id}
      }
    )
  } else {
    audio[0].currentTime = 0;
    return {
      type: "PLACEHOLDER"
    };
  }
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

export const setVolume = (volume) => {
  return ({
    type: SET_VOLUME,
    volume
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