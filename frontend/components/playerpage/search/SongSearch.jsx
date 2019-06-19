import React from 'react';
import SongItem from '../display/shows/playlist/SongItem';

export default (props) => (
  <div className='song-index'>
    <ul>
      {props.songs.map((song, idx) => <SongItem key={song.id} song={song} songs={props.songs} playSong={props.playSong} index={idx} />)}
    </ul>
  </div>
)