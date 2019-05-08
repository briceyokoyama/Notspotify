import React from 'react';
import SongDropdown from './SongDropdown';

class SongItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false
    }
    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
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

  render() {
    let {song} = this.props;

    return (
      <div className={'song-item'}>
        <div>

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
        </div>
        <SongDropdown show={this.state.showDropdown}/>
      </div>
    )
  }
}

export default SongItem;