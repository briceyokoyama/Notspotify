import React from 'react';
import { Link } from 'react-router-dom';

class PlayerNavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'player-navbar-container'}>
        <div className={'player-navigation-container'}>
          <div className={'player-logo-container'}>
            <Link to="/">
              <svg className={'player-nav-logo'}></svg>
              <div className={'player-nav-title'}>Notspotify</div>
            </Link>
          </div>
          <nav className={'player-nav-main'}>
            <ul>
              <div className={'player-nav-element'}>
                <li>
                  <i className={'fa fa-home'}/>
                  <span className={'player-nav-text'}>Home</span>
                </li>
              </div>
              <div className={'player-nav-element'}>
                <li>
                  <i className={'fa fa-home'}/>
                  <span className={'player-nav-text'}>Search</span>
                </li>
              </div>
              <div className={'player-nav-element'}>
                <li>
                  <i className={'fa fa-home'}/>
                  <span className={'player-nav-text'}>Your Library</span>
                </li>
              </div>
            </ul>
          </nav>
        </div>
        <div className={'player-user-info'}>
          <span onClick={this.props.logout}>Logout</span>
        </div>
      </div>
    )
  }

}

export default PlayerNavBar;