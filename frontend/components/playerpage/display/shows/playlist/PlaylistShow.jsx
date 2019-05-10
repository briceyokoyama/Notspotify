import React from 'react';
import SongItem from './SongItem';
import PlaylistShowDetail from './PlaylistShowDetail';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.playlistId);
  }

  songHover() {
    
  }

  render() {
    if (this.props.loading) return <div></div>

    return (
      <div className={'playlist-show-container'}>
        <div className={'playlist-info-container'}>
          {this.props.playlist.map(playlist => <PlaylistShowDetail key={playlist.id} playlist={playlist} songs={this.props.songs} playSong={this.props.playSong} />)}
        </div>
        <div className={'song-list-container'}>
          {this.props.songs.map((song, idx) => <SongItem key={song.id} song={song} songs={this.props.songs} playSong={this.props.playSong} index={idx}
          onMouseEnter={this.someHandler} onMouseLeave={this.someOtherHandler}/>)}
        </div>
      </div>
    )
  }
}

export default PlaylistShow;