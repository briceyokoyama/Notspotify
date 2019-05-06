import React from 'react';
import PlayerNavBarContainer from './navbar/PlayerNavBarContainer';
import PlayBarContainer from './playbar/PlayBarContainer';
import PlayerDisplayContainer from './display/PlayerDisplayContainer';

const PlayerPage = () => {
  return (
    <div className='player-page'>
      <PlayerNavBarContainer />
      <PlayBarContainer />
      <PlayerDisplayContainer />
    </div>
  )
}

export default PlayerPage;