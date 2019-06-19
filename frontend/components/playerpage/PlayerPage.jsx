import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PlayerNavBarContainer from './navbar/PlayerNavBarContainer';
import PlayBarContainer from './playbar/PlayBarContainer';
import PlaylistShowContainer from './display/shows/playlist/PlaylistShowContainer';
import PlayerDisplay from './display/PlayerDisplay';

const PlayerPage = () => {
  return (
    <div className='player-page'>
      <PlayerNavBarContainer />
      <PlayBarContainer />
      <Switch>
<<<<<<< HEAD
        <Route path='/search/results/:searchTerm' component={SearchContainer} />
        <Route path='/search' component={SearchContainer} />
=======
>>>>>>> master
        <Route path='playlists/:playlistId' component={PlaylistShowContainer} />
        <Route path='/' component={PlayerDisplay} />
      </Switch>
    </div>
  )
}

export default PlayerPage;