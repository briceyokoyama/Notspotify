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

  render() {
    if (this.props.loading) return <div></div>
    let {songsObj, playlist} = this.props;
    let songs = songsObj.map(songObj => songObj.song)
    return (
      <div className={'playlist-show-container'}>
        <div className={'playlist-info-container'}>
          {playlist.map(playlist => <PlaylistShowDetail key={playlist.id} playlist={playlist} songs={songs} playSong={this.props.playSong} length={songs.length}/>)}
        </div>
        <div className={'song-list-container'}>
          {songsObj.map((songObj, idx) => <SongItem key={songObj.psId} song={songObj.song} songs={songs} playSong={this.props.playSong} index={idx} psId={songObj.psId}/>)}
        </div>
      </div>
    )
  }
}

export default PlaylistShow;