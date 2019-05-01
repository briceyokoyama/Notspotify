import React from 'react';

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
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.processForm(this.state);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value} )
    }
  }

  render() {
    const login = () => (
      <div className={'form-container'}>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder={'Email address or username'} value={this.state.username}
            onChange={this.handleInput('username')}/>
          <br/>
          <input type='password' placeholder={'Password'} value={this.state.password}
            onChange={this.handleInput('password')}/>
          <br/>
          <button onClick={this.handleSubmit}>LOG IN</button>
        </form>
      </div>
    )

    const signup = () => (
      <div className={'form-container'}>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder={'Email'} value={this.state.email}
            onChange={this.handleInput('email')}/>
          <br/>
          <input type='text' placeholder={'Username'} value={this.state.username}
            onChange={this.handleInput('username')}/>
          <br/>
          <input type='text' placeholder={'Name'} value={this.state.name}
            onChange={this.handleInput('name')}/>
          <br/>
          <input type='password' placeholder={'Password'} value={this.state.password}
            onChange={this.handleInput('password')}/>
          <br/>
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    )

    return (this.props.formType === 'signup') ? signup() : login()

  }
}

export default SessionForm;