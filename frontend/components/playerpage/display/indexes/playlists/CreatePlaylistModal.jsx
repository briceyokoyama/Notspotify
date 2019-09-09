//MODAL DESIGN INSPIRED BY: https://codepen.io/alligatorio/pen/aYzMKL

import React, { useState } from 'react';

const CreatePlaylistModal = (props) => {

  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.makePlaylist({title, user_id: props.currentUserId});
    setTitle("");
    props.handleClose();
  }

  const showHideClassName = props.show ? `create-playlist-modal display-block` : `create-playlist-modal display-none`
  return (
    <div className={showHideClassName}>
      <div>
        <div className={'exit-button'} onClick={props.handleClose}>X</div>
        <div className={'playlist-modal-header'}>Create new playlist</div>
        <div className={'playlist-entry'}>
          <div>
            <div>
              Playlist Name
            </div>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder={'Start typing...'} value={title} onChange={(e) => setTitle(e.target.value)} />
            </form>
          </div>
        </div>
        <div className={'playlist-modal-button-holder'}>
          <button className={'playlist-cancel-button'} onClick={props.handleClose}>CANCEL</button>
          <button onClick={handleSubmit}>CREATE</button>
        </div>
      </div>
    </div>
  )
}

export default CreatePlaylistModal;