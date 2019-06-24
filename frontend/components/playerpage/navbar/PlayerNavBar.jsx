import React from 'react';
import { Link } from 'react-router-dom';
import AddSongModal from '../../AddSongModal';

class PlayerNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.searchPlaylists(this.props.userId)
  }

  handleClick(type) {
    return (e) => {
      this.props.history.push(`/${type.toLowerCase()}`);
    }
  }

  render() {
    return (
      <div className={'player-navbar-container'}>
        <div className={'player-navigation-container'}>
          <div className={'player-logo-container'}>
            <Link to="/home/playlists">
              <svg className={'player-nav-logo'}></svg>
              <div className={'player-nav-title'}>Notspotify</div>
            </Link>
          </div>
          <nav className={'player-nav-main'}>
            <ul>
              <div className={'player-nav-element'}>
                <li onClick={this.handleClick('home/playlists')}>
                  <i className={'fa fa-home'}/>
                  <span className={'player-nav-text'}>Home</span>
                </li>
              </div>
              <div className={'player-nav-element'}>
                <li onClick={this.handleClick('search')}>
                  <i className={'fa fa-search'}/>
                  <span className={'player-nav-text'}>Search</span>
                </li>
              </div>
              <div className={'player-nav-element'}>
                <li onClick={this.handleClick('library/playlists')}>
                  <i className={'fa fa-fire'}/>
                  <span className={'player-nav-text'}>Your Library</span>
                </li>
              </div>
            </ul>
          </nav>
        </div>
        <div className={'player-user-info'}>
          <span onClick={this.props.logout}>Logout</span>
        </div>
        <AddSongModal show={this.props.addSong.show} songId={this.props.addSong.id} handleClose={this.props.closeModal} playlists={this.props.playlists} handleClick={this.props.addSongToPlaylist} />
      </div>
    )
  }

}

export default PlayerNavBar;