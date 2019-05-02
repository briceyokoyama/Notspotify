import React from 'react';
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    
    if (this.props.formType === 'signup') {
      this.state = {
        username: '',
        email: '',
        name: '',
        password: ''
      }  
    } else {
      this.state = {
        username: '',
        password: ''
      } 
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors()
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value} )
    }
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    this.props.processForm({username: 'user4', password: 'password'});
  }

  getErrors(type) {
    return this.props.errors[type]
  }

  render() {
    const login = () => (
      <div className={'session-page'}>
        <div className={`session-header`}>
          <Link to='/'>
            <div className={'session-logo'}></div>
            <div className={'session-header-title'}>Notspotify</div>
          </Link>
        </div>
          <hr/>
        <div className={'form-container'}>
          <form onSubmit={this.handleSubmit}>
            <button onClick={this.handleDemoSubmit} id={'demo-button'}>DEMO USER LOG IN</button>
            <div className="session-or">or</div>
            <hr width={'100%'}/>
            <div className={'form-header'}>Sign in with your email address or username</div>  
            <input type='text' placeholder={'Email address or username'} value={this.state.username}
              onChange={this.handleInput('username')}/>
            <br/>
            <input type='password' placeholder={'Password'} value={this.state.password}
              onChange={this.handleInput('password')}/>
            <br/>
            <button onClick={this.handleSubmit}>LOG IN</button>
          </form>
            <ul>
            {this.props.errors.map((err, idx) => {
              return (
                <li key={idx} className={'form-error'}>{err}</li>)}
              )
            }
          </ul>
        </div>
      </div>
    )

    const signup = () => (
      <div className={'session-page'}>
        <div className='session-header'>
          <Link to='/'>
            <div className={'session-logo'}></div>
            <div className={'session-header-title'}>Notspotify</div>
          </Link>
        </div>
        <hr/>
        <div className={'form-container'}>
          <form onSubmit={this.handleSubmit}>
            <div className={'form-header'}>Sign up with your email address</div>
            <input type='text' placeholder={'Email'} value={this.state.email}
              onChange={this.handleInput('email')}/>
              {/* { Array.isArray(this.errors) ? null :
                <ul>
                  {this.getErrors('username').map(err => <li>{err}</li>)}
                </ul>
                } */}
            <br/>
            <input type='text' placeholder={'Username'} value={this.state.username}
              onChange={this.handleInput('username')}/>
            <br/>
            <input type='text' placeholder={'What should we call you?'} value={this.state.name}
              onChange={this.handleInput('name')}/>
            <br/>
            <input type='password' placeholder={'Password'} value={this.state.password}
              onChange={this.handleInput('password')}/>
            <br/>
            <button onClick={this.handleSubmit}>SIGN UP</button>
          </form>
          <br/>
          <ul>
            {this.props.errors.map((err, idx) => {
              return (
                <li key={idx} className={'form-error'}>{err}</li>)}
              )
            }
          </ul>
        </div>
      </div>
    )

    return (this.props.formType === 'signup') ? signup() : login()

  }
}

export default SessionForm;