import React from 'react';

export default (props) => (
  <li>
    <img className={'playlist-image'} src={props.playlist.coverUrl} alt="playlist"/>
    <div className={'playlist-title'}>{props.playlist.title}</div>
    <div className={'playlist-creator'}>{props.playlist.creator}</div>
  </li>
)