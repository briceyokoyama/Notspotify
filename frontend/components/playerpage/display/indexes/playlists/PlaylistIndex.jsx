import React, { useState, useEffect} from 'react';
import PlaylistIndexItem from './PlaylistIndexItem';
import CreatePlaylistModal from './CreatePlaylistModal';

const PlaylistIndex = (props) => {
  const [showModal, toggleModal] = useState(false);
  const modal = () => toggleModal(!showModal)


  return (
    <>
      <CreatePlaylistModal handleClose={modal} show={showModal} makePlaylist={props.makePlaylist} currentUserId={props.currentUserId}/>
      { (props.match.params.main === 'library') ? (
        <div className={'playlist-create-button-holder'}>
          <button className={'playlist-create-button'} onClick={modal}>
            NEW PLAYLIST
          </button>
        </div>
        ) : ( null )
      }
      <div className={'playlist-index'}>
        <ul>
          {props.playlists.map(playlist => <PlaylistIndexItem key={playlist.id} playlist={playlist}/>)}
        </ul>
      </div>
    </>
  )
}


export default PlaylistIndex;