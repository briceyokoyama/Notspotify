import { connect } from 'react-redux';
import PlayerNavBar from './PlayerNavBar';
import { logout } from '../../../actions/session_actions'

const mstp = (state, ownProps) => ({

})

const mdtp = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mstp, mdtp)(PlayerNavBar);