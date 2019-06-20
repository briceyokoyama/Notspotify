import React from 'react';
import ArtistSearch from '../../../search/AlbumSearch';


class AlbumIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAlbumss()
  }

  render() {
    return (
      <ArtistSearch artists={this.props.artists} />
    )
  }
}

export default ArtistIndex;

import { connect } from 'react-redux';
import ArtistIndex from './ArtistIndex';
import { fetchArtists } from '../../../../../actions/artist_actions';

// const playlistSelector = (playlists) => {
//   return Object.keys(playlists).map(id => playlists[id])
// }


const mstp = (state, ownProps) => ({
  artists: Object.values(state.entities.artists)
})

const mdtp = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists())
})

export default connect(mstp, mdtp)(ArtistIndex);