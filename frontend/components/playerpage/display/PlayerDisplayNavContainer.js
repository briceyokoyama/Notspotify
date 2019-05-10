import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PlayerDisplayNav from './PlayerDisplayNav';

const mstp = (state, ownProps) => {
  
return ({
  headings: ['PLAYLISTS', 'ARTISTS', 'SONGS']
})

}

const mdtp = dispatch => ({

})

export default withRouter(connect(mstp, mdtp)(PlayerDisplayNav));