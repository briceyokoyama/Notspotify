import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PlayerDisplayNavContainer from './PlayerDisplayNavContainer';
import PlaylistIndexContainer from './indexes/playlists/PlaylistIndexContainer';
import ArtistIndexContainer from './indexes/artists/ArtistIndexContainer';
import PlaylistShowContainer from './shows/playlist/PlaylistShowContainer';
import AlbumShowContainer from './shows/album/AlbumShowContainer';
import AlbumIndexContainer from './indexes/albums/AlbumIndexContainer';
import ArtistShowContainer from './shows/artist/ArtistShowContainer';

class PlayerDisplay extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='player-main-display-container'>
        <Route path='/(home|library)' component={PlayerDisplayNavContainer}/>
        <div className={'player-display-container'}>
        <Switch>
          <Route path='/playlists/:id' component={PlaylistShowContainer} />
          <Route path='/albums/:id' component={AlbumShowContainer} />
          <Route path='/artists/:id' component={ArtistShowContainer} />
          <Route path='/songs/' component={PlaylistShowContainer} />
          <Route path='/:main/playlists' component={PlaylistIndexContainer} />
          <Route path='/:main/artists' component={ArtistIndexContainer} />
          <Route path='/:main/albums' component={AlbumIndexContainer} />
        </Switch>
        </div>
      </div>
    )
  }
}

export default PlayerDisplay;