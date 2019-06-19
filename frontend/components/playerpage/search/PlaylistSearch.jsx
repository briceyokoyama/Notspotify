import React from 'react';
import PlaylistIndexItem from '../display/indexes/playlists/PlaylistIndexItem';

export default (props) => (
  <div className='playlist-index'>
    <ul>
      {props.playlists.map(playlist => <PlaylistIndexItem key={playlist.id} playlist={playlist} />)}
    </ul>
  </div>
)