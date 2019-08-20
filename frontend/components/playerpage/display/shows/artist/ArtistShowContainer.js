import { connect } from 'react-redux';
import ArtistShow from './ArtistShow';

const artistSelector = (artists, artist_id) => {
  return artists[artist_id];
}

const albumSelector = (albums, artist_id) => {
  console.log("albums (pre-filter): ", Object.values(albums))
  return Object.values(albums)
    .filter(album => album.artistId == artist_id);
}

const mstp = (state, ownProps) => ({
  artistId: ownProps.match.params.id,
  artist: artistSelector(state.entities.artists, ownProps.match.params.id),
  albums: albumSelector(state.entities.albums, ownProps.match.params.id)
})

const mdtp = dispatch => ({

})

export default connect(mstp, mdtp)(ArtistShow);