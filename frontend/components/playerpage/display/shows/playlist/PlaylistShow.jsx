import React from 'react';
import SongItem from './SongItem';
import PlaylistShowDetail from './PlaylistShowDetail';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.playlistId);
    this.props.fetchAllSongs();
    this.props.fetchPlaylistSongs();
  }


  render() {
    // debugger;
    return (
      <div className={'playlist-show-container'}>
        <div className={'playlist-info-container'}>
          {this.props.playlist.map(playlist => <PlaylistShowDetail key={playlist.id} playlist={playlist} />)}
        </div>
        <div className={'song-list-container'}>
          {this.props.songs.map(song => <SongItem key={song.id} song={song}/>)}
        </div>
      </div>
    )
  }
}

export default PlaylistShow;