import { connect } from 'react-redux';
import HomeNavBar from './HomeNavBar';
import { logout } from '../../actions/session_actions'

const mstp = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id]
})

const mdtp = dispatch => ({
  logout: () => dispatch(logout())
  })

export default connect(mstp, mdtp)(HomeNavBar)