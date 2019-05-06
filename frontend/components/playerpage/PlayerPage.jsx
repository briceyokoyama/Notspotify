import React from 'react';
import PlayerNavBarContainer from './navbar/PlayerNavBarContainer';
import PlayBarContainer from './playbar/PlayBarContainer';
import PlayerDisplay from './display/PlayerDisplay';

const PlayerPage = () => {
  return (
    <div className='player-page'>
      <PlayerNavBarContainer />
      <PlayBarContainer />
      <PlayerDisplay />
    </div>
  )
}

export default PlayerPage;