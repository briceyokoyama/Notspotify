import React from 'react';
import SongItem from '../playlist/SongItem';
import PlaylistShowDetail from '../playlist/PlaylistShowDetail';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.albumId);
  }

  render() {
    if (this.props.loading) return <div></div>
    let {songs, album} = this.props;
    let playlist = [{
      id: album.id,
      title: album.title,
      creator: album.artist,
      coverUrl: album.coverUrl
    }]
    console.log(songs);
    return (
      <div className={'playlist-show-container'}>
        <div className={'playlist-info-container'}>
          {playlist.map(playlist => <PlaylistShowDetail key={playlist.id} playlist={playlist} songs={songs} playSong={this.props.playSong} length={songs.length}/>)}
        </div>
        <div className={'song-list-container'}>
          {songs.map((song, idx) => <SongItem key={song.id} song={song} songs={this.props.songs} playSong={this.props.playSong} index={idx} />)}
        </div>
      </div>
    )
  }
}

export default AlbumShow;