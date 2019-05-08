import React from 'react';
import SongItem from './SongItem';
import PlaylistShowDetail from './PlaylistShowDetail';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.playlistId);
    this.props.fetchSongs(this.props.playlistId);
    this.props.fetchPlaylistSongs(this.props.playlistId);
  }


  render() {
    // debugger;
    return (
      <div className={'playlist-show-container'}>
        <div className={'playlist-info-container'}>
          {this.props.playlist.map(playlist => <PlaylistShowDetail playlist={playlist} />)}
        </div>
        <div className={'song-list-container'}>
          {this.props.songs.map(song => <SongItem song={song}/>)}
        </div>
      </div>
    )
  }
}

export default PlaylistShow;