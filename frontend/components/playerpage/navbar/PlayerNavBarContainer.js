import { connect } from 'react-redux';
import PlayerNavBar from './PlayerNavBar';
import { logout } from '../../../actions/session_actions';
import { withRouter } from 'react-router';

const mstp = (state, ownProps) => ({

})

const mdtp = dispatch => ({
  logout: () => dispatch(logout())
})

export default withRouter(connect(mstp, mdtp)(PlayerNavBar));