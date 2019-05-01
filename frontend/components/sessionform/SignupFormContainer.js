import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { signup } from '../../actions/session_actions'

const mstp = (state, ownProps) => ({
  errors: state.session,
  formType: 'signup'
})

const mdtp = (dispatch) => ({
  processForm: user => dispatch(signup(user))
})

export default connect(mstp, mdtp)(SessionForm);