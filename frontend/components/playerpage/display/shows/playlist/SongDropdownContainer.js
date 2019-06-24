import { connect } from 'react-redux';
import SongDropdown from './SongDropdown';
import { addSong } from '../../../../../actions/song_actions';

const mstp = (state, ownProps) => ({

})

const mdtp = (dispatch) => ({
  addSong: (id) => dispatch(addSong(id))
})

export default connect(mstp, mdtp)(SongDropdown);