import React from 'react';

class SongDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const showHideClassName = this.props.show ? 'song-dropdown display-block' : 'song-dropdown display-none';
    
    return (
      <div className={showHideClassName}>
        <div onClick={() => this.props.addSong(this.props.id)}>Add to playlist</div>
        {(this.props.psId && this.props.playlist && this.props.playlist.userId === this.props.userId)
          ? <div onClick={() => this.props.removeSongFromPlaylist(this.props.psId)}>Remove from playlist</div>
          : null}
      </div>
    )
  }
}

export default SongDropdown;