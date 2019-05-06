//MODAL DESIGN INSPIRED BY: https://codepen.io/alligatorio/pen/aYzMKL

const CreatePlaylistModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal dispaly-none';

  return (
    <div className={showHideClassName}>
      <section className={'modal-main'}>
        {children}
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};