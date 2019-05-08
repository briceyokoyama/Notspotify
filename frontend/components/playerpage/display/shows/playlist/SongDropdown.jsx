import React from 'react';

class SongDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleClose();
  }

  render() {
    const showHideClassName = this.props.show ? 'song-dropdown display-block' : 'song-dropdown display-none';
    
    return (
      <div className={showHideClassName}>
        Add to playlist
      </div>
    )
  }
}

export default SongDropdown;