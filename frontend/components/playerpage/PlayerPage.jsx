import React from 'react';
import NavBarContainer from './navbar/NavBarContainer';
import PlayBarContainer from './playbar/PlayBarContainer';
import PlayerDisplayContainer from './display/PlayerDisplayContainer';

const PlayerPage = () => {
  return (
    <div className='player-page'>
      <NavBarContainer />
      <PlayBarContainer />
      <PlayerDisplayContainer />
    </div>
  )
}

export default PlayerPage;