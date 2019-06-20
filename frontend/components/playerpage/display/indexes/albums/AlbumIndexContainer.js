import { connect } from 'react-redux';
import AlbumIndex from './AlbumIndex';
import { fetchAlbums } from '../../../../../actions/album_actions';

const mstp = (state, ownProps) => ({
  albums: Object.values(state.entities.albums)
})

const mdtp = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums())
})

export default connect(mstp, mdtp)(AlbumIndex);