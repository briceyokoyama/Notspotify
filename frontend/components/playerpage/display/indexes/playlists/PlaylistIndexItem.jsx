import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  <li>
    <div onClick={props.handleClick ? () => props.handleClick({playlistId: props.playlist.id, songId: props.songId}) : null}>
      <Link to={`/playlists/${props.playlist.id}`}>
        <img className={'playlist-image'} src={props.playlist.coverUrl} alt="playlist"/>
      </Link>
      <Link to={`/playlists/${props.playlist.id}`}>
        <span className={'playlist-title'}>{props.playlist.title}</span>
      </Link>
    </div>
    <div className={'playlist-creator'}>{props.playlist.creator}</div>
  </li>
)