import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PlayerDisplayNavContainer from './PlayerDisplayNavContainer';
import PlaylistIndexContainer from './indexes/playlists/PlaylistIndexContainer';
import ArtistIndexContainer from './indexes/artists/ArtistIndexContainer';
import PlaylistShowContainer from './shows/playlist/PlaylistShowContainer';
// import { ProtectedRoute } from '../../../util/route_util';

class PlayerDisplay extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='player-main-display-container'>
        <Route path='/(home|library)' component={PlayerDisplayNavContainer}/>
        <div className={'player-display-index-container'}>
        <Switch>
          <Route path='/playlists/:id' component={PlaylistShowContainer} />
          <Route path='/:main/playlists' component={PlaylistIndexContainer} />
          <Route path='/:main/artists' component={ArtistIndexContainer} />
        </Switch>
        </div>
      </div>
    )
  }
}

export default PlayerDisplay;