import React from 'react';

class SongDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const showHideClassName = this.props.show ? 'song-dropdown display-block' : 'song-dropdown display-none';
    
    return (
      <div className={showHideClassName}>
        <span onClick={() => this.props.addSong(this.props.id)}>Add to playlist</span>
      </div>
    )
  }
}

export default SongDropdown;