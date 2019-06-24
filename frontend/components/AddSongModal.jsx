//MODAL DESIGN INSPIRED BY: https://codepen.io/alligatorio/pen/aYzMKL
import React from 'react';
import PlaylistIndexItem from './playerpage/display/indexes/playlists/PlaylistIndexItem';

const Modal = (props) => {
  const showHideClassName = props.show === true ? 'add-song-modal display-block' : 'add-song-modal display-none';
  return (
    <div className={showHideClassName}>
      <div>
        <div className={'exit-button'} onClick={props.handleClose}>X</div>
        <div className={'playlist-modal-header'}>Add to playlist</div>
        <div className='playlist-index'>
          <ul>
            {props.playlists.map(playlist => <PlaylistIndexItem key={playlist.id} playlist={playlist} handleClick={props.handleClick} songId={props.songId} />)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;