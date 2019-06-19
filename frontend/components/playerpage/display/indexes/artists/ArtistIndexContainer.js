import { connect } from 'react-redux';
import ArtistIndex from './ArtistIndex';

// const playlistSelector = (playlists) => {
//   return Object.keys(playlists).map(id => playlists[id])
// }


const mstp = (state, ownProps) => ({
  artists: Object.values(state.entities.artists)
})

const mdtp = dispatch => ({

})

export default connect(mstp, mdtp)(ArtistIndex);