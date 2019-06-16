import React from 'react';
import SongDropdown from './SongDropdown';
import AddSongModal from './AddSongModal';
// import { playSelectedSong } from '../../../../../actions/song_actions';

class SongItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false
    }
    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.playSong = this.playSong.bind(this);
  }

  showDropdown() {
    this.setState({showDropdown: true}, () => {
      document.addEventListener('click', this.hideDropdown);
    });
  }

  hideDropdown() {
    this.setState({showDropdown: false}, () => {
      document.removeEventListener('click', this.hideDropdown);
    });
  }

  playSong() {
    this.props.playSong({song: this.props.song, songs: this.props.songs, index: this.props.index})
  }

  render() {
    let {song} = this.props;
    return (
      <div className={'song-item'}>
        <div className={'buttons'}>
          <i className="fa fa-music" aria-hidden="true"></i>
          <i className="fa fa-play-circle-o hidden" aria-hidden="true" onClick={this.playSong}/>
        </div>
        <div className={'song-info-container'}>
          <div className={'song-title'}>
            {song.title}
          </div>
          <div className={'song-other-info'}>
            <span>
              {song.artist}
            </span>
            <span>&nbsp; • &nbsp;</span>
            <span>
              {song.album}
            </span>
          </div>
        </div>
        <div className={'options'} onClick={this.showDropdown}>
          {'...'}
          <SongDropdown show={this.state.showDropdown}/>
        </div>
      </div>
    )
  }
}

export default SongItem;