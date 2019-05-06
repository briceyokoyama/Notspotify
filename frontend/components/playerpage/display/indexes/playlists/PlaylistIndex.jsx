import React from 'react';
import PlaylistIndexItem from './PlaylistIndexItem';

class PlaylistIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  showModal() {
    this.setState({showModal: true})
  }

  hideModal() {
    this.setState({showModal: false})
  }

  render() {
    return (
      <>
        { (this.props.match.params.main === 'library') ? (
          <div className={'playlist-create-button-holder'}>
            <button className={'playlist-create-button'}>
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