//MODAL DESIGN INSPIRED BY: https://codepen.io/alligatorio/pen/aYzMKL
import PlaylistIndexContainer from '../../../display/indexes/playlists/PlaylistIndexContainer';

import React from 'react';

class AddSongModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      user_id: this.props.currentUserId
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput() {
    return (e) => this.setState({ title: e.target.value })
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.makePlaylist(this.state);
    this.setState({title: ""});
    this.props.handleClose();
  }

  render() {
    const showHideClassName = this.props.show ? 'create-playlist-modal display-block' : 'create-playlist-modal display-none';

    return (
      <div className={showHideClassName}>
        <PlaylistIndexContainer adding={true}/>
        {/* <div>
          <div className={'exit-button'} onClick={this.props.handleClose}>X</div>
          <div className={'playlist-modal-header'}>Create new playlist</div>
          <div className={'playlist-entry'}>
            <div>
              <div>
                Playlist Name
              </div>
              <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder={'Start typing...'} value={this.state.title} onChange={this.handleInput()}/>
              </form>
            </div>
          </div>
          <div className={'playlist-modal-button-holder'}>
            <button className={'playlist-cancel-button'} onClick={this.props.handleClose}>CANCEL</button>
            <button onClick={this.handleSubmit}>CREATE</button>
          </div>
        </div> */}
      </div>
    );
  }
};

export default AddSongModal;