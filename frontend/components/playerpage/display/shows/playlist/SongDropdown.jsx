import React from 'react';
import AddSongModal from './AddSongModal'

class SongDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }
    this.showModal = this.showModal.bind(this); 
    this.hideModal = this.hideModal.bind(this); 

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showModal() {
    this.setState({showModal: true})
  }

  hideModal() {
    this.setState({showModal: false})
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleClose();
  }

  render() {
    const showHideClassName = this.props.show ? 'song-dropdown display-block' : 'song-dropdown display-none';
    
    return (
      <>
        <div className={showHideClassName}>
          Add to playlist
        </div>
        <AddSongModal show={this.state.showModal}/>
      </>
    )
  }
}

export default SongDropdown;