import { connect } from 'react-redux';
import Search from './Search';
import { searchSongs } from '../../../actions/song_actions';

const mstp = (state, ownProps) => {
  console.log(ownProps)
}

const mdtp = dispatch => {
  searchSongs: query => dispatch(searchSongs(query));
}

export default connect(mstp, mdtp)(Search);