import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { signup } from '../../actions/session_actions'

const mstp = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'signup'
})

const mdtp = (dispatch) => ({
  processForm: user => dispatch(signup(user)),
  clearErrors: () => dispatch({type: 'CLEAR_ERRORS'})
})

export default connect(mstp, mdtp)(SessionForm);