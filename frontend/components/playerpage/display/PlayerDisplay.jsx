import React from 'react';
import { Switch } from 'react-router-dom';
import PlayerDisplayNavContainer from './PlayerDisplayNavContainer';
import PlaylistIndexContainer from './indexes/playlists/PlaylistIndexContainer';
import { ProtectedRoute } from '../../../util/route_util';

class PlayerDisplay extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='player-main-display-container'>
        <PlayerDisplayNavContainer />
        <div className={'player-display-index-container'}>
        <PlaylistIndexContainer />
        </div>
      </div>
    )
  }
}

export default PlayerDisplay;