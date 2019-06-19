import React from 'react';
import SongItem from '../display/shows/playlist/SongItem';

export default (props) => (
  <div className='song-index'>
    <ul>
      {props.songs.map(song => <SongItem key={song.id} song={song} />)}
    </ul>
  </div>
)