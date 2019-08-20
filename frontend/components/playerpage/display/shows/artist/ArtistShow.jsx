import React from 'react';
import AlbumIndexItem from '../../../display/indexes/albums/AlbumIndexItem'

const ArtistShow = (props) => {
  console.log("albums: ", props.albums)
  return (
    <div className='artist-show-container'>
      <div className='artist-picture-display'>
          <img className='artist-image' src={props.artist.avatarUrl}/>
          <p>{props.artist.name}</p>
      </div>

      <div className='album-header'>
        ALBUMS
      </div>
      
      <div className='album-index'>
        <ul>
          {props.albums.map(album => <AlbumIndexItem key={album.id} album={album} />)}
        </ul>
      </div>
    </div>
  )
}

export default ArtistShow;