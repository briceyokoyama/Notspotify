import { connect } from 'react-redux';
import PlaylistShow from './PlaylistShow';

const mstp = (state, ownProps) => {

  return ({
    playlistId
  })
}

const mdtp = dispatch => ({

})

export default connect(mstp, mdtp)(PlaylistShow);