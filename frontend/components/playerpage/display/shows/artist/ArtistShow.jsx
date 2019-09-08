import React, { useEffect } from 'react';
import AlbumIndexItem from '../../../display/indexes/albums/AlbumIndexItem'

const ArtistShow = (props) => {

  useEffect(() => {
    props.fetchArtist(props.artistId)
  }, {})

  return (
    <div className='artist-show-container'>
      <div className='artist-picture-display'>
          {props.artist ? <img className='artist-image' src={props.artist.avatarUrl}/> : null}
          {props.artist ? <p>{props.artist.name}</p> : null}
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