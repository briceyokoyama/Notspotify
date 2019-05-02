import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { login } from '../../actions/session_actions'

const mstp = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'login'
})

const mdtp = (dispatch) => ({
  processForm: user => dispatch(login(user)),
  clearErrors: () => dispatch({type: 'CLEAR_ERRORS'})
})

export default connect(mstp, mdtp)(SessionForm);