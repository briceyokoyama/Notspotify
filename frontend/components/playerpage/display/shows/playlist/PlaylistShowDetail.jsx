import React from 'react';

const PlaylistShowDetail = props => (
  <div className={'playlist-details'}>
    <div className={'playlist-main-det-container'}>
      <img className={'playlist-image-large'} src={props.playlist.coverUrl} alt='playlist' />
      <div className={'playlist-title'}>{props.playlist.title}</div>
    </div>
    <div className={'playlist-show-creator'}>{props.playlist.creator}</div>
    <div className={'playlist-show-button-container'}><button>PLAY</button></div>
    <div className={'playlist-length'}>{`${props.playlist.length} SONGS`}</div>
  </div>
)

export default PlaylistShowDetail;