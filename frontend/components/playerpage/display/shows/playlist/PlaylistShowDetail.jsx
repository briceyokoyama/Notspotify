import React from 'react';

class PlaylistShowDetail extends React.Component {
  constructor(props) {
    super(props)

    this.playSong = this.playSong.bind(this);
  }

  playSong() {
    this.props.playSong({song: this.props.songs[0], songs: this.props.songs, index: 0})
  }

  render() {
    return (
      <div className={'playlist-details'}>
        <div className={'playlist-main-det-container'}>
          <img className={'playlist-image-large'} src={this.props.playlist.coverUrl} alt='playlist' />
          <div className={'playlist-title'}>{this.props.playlist.title}</div>
        </div>
        <div className={'playlist-show-creator'}>{this.props.playlist.creator}</div>
        <div className={'playlist-show-button-container'}>
        <button onClick={this.playSong}>PLAY</button>
        </div>
        <div className={'playlist-length'}>{`${this.props.playlist.length} SONGS`}</div>
      </div>
    )
  }
}

export default PlaylistShowDetail;