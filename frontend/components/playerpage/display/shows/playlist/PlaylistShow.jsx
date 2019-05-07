import React from 'react';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    debugger;
    this.props.fetchPlaylist(this.props.playlistId);
    this.props.fetchSongs(this.props.playlistId);
  }


  render() {
    return (
      <div className={'playlist-show-container'}>
        <div className={'playlist-info-container'}>
        </div>
        <div className={'song-list-container'}>
        </div>
      </div>
    )
  }
}

export default PlaylistShow;