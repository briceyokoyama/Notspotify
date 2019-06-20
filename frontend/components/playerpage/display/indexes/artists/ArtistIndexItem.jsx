import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  <li>
    <div className='artist-index-item'>
      <Link to={`/artists/${props.artist.id}`}>
        <img className='artist-image' src={props.artist.avatarUrl} alt="playlist"/>
      </Link>
      <Link to={`/artists/${props.artist.id}`}>
        <span className='artist-name'>{props.artist.name}</span>
      </Link>
    </div>
  </li>
)