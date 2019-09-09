import React, { useEffect } from 'react';
import ArtistSearch from '../../../search/ArtistSearch';


const ArtistIndex = props => {

  useEffect(() => {
    props.fetchArtists()
  }, {})

  return (
    <ArtistSearch artists={props.artists} />
  )
}

export default ArtistIndex;