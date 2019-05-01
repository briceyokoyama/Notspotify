import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { login } from '../../actions/session_actions'

const mstp = (state, ownProps) => ({
  errors: state.session,
  formType: 'login'
})

const mdtp = (dispatch) => ({
  processForm: user => dispatch(login(user))
})

export default connect(mstp, mdtp)(SessionForm);