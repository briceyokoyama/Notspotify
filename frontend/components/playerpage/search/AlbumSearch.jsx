import React from 'react';
import AlbumIndexItem from '../display/indexes/albums/AlbumIndexItem';

export default (props) => (
  <div className='album-index'>
    <ul>
      {props.albums.map(album => <AlbumIndexItem key={album.id} album={album} />)}
    </ul>
  </div>
)