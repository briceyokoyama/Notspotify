import React from 'react';
import PlaylistIndexItem from './PlaylistIndexItem';
import CreatePlaylistModal from './CreatePlaylistModal';

class PlaylistIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }
    this.showModal = this.showModal.bind(this); 
    this.hideModal = this.hideModal.bind(this); 
  }

  componentDidMount() {
    this.props.fetchPlaylists();
    // this.props.fetchPlaylistFollowers();
  }

  showModal() {
    this.setState({showModal: true})
  }

  hideModal() {
    this.setState({showModal: false})
  }

  render() {
    debugger;
    return (
      <>
        <CreatePlaylistModal handleClose={this.hideModal} show={this.state.showModal} makePlaylist={this.props.makePlaylist} currentUserId={this.props.currentUserId}/>
        { (this.props.match.params.main === 'library') ? (
          <div className={'playlist-create-button-holder'}>
            <button className={'playlist-create-button'} onClick={this.showModal}>
              NEW PLAYLIST
            </button>
          </div>
          ) : ( null )
        }
        <div className={'playlist-index'}>
          <ul>
            {this.props.playlists.map(playlist => <PlaylistIndexItem key={playlist.id} playlist={playlist}/>)}
          </ul>
        </div>
      </>
    )
  }
}

export default PlaylistIndex;