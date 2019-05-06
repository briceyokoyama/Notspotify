//MODAL DESIGN INSPIRED BY: https://codepen.io/alligatorio/pen/aYzMKL

import React from 'react';

const CreatePlaylistModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'create-playlist-modal display-block' : 'create-playlist-modal display-none';

  return (
    <div className={showHideClassName}>
      <div className>
        <section className={'create-playlist-modal-text'}>
          <div>
            <div>
              Hello
            </div>
            <div>
              Hello
            </div>
          </div>
        </section>
        <div className={'playlist-modal-button-holder'}>
          <button className={'playlist-modal-cancel-button'}>CANCEL</button>
          <button className={'playlist-modal-create-button'}>CREATE</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePlaylistModal;