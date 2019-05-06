import React from 'react';
import PlaylistIndexItem from './PlaylistIndexItem';

class PlaylistIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    return (
      <div className={'playlist-index'}>
        <ul>
          {this.props.playlists.map(playlist => <PlaylistIndexItem key={playlist.id} playlist={playlist}/>)}
        </ul>
      </div>
    )
  }

}

export default PlaylistIndex;