# Notspotify

[Live Demo](https://not-spotify.herokuapp.com/)

Notspotify is a single-page web application that allows users to stream my favorite songs.The design and functionality is inspired by Spotify.

## Technologies

Notspotify is built using Ruby on Rails and a PostgreSQL database to handle the backend.
AWS S3 is used to host the main media files (artist, playlist, and album art as well as song files).
React and Redux are used to manage the state of the front end alongside HTML5 and SASS for styling.
  
![](./readme/splashpage.PNG)
  
## Features

### Playlist Index (All playlists and followed playlists)

One of the main features of Notspotify gives the user power to create their own playlists and follow playlists they like. Coming up with a way to allow the user to see an index of all playlists on Notspotify and also allow the user to see an index that contains only the playlists they've followed was one challenge that presented itself during this project.
  
  
The code snippet below is contained in the ```PlaylistIndexContainer.js``` file which connects the playlist index to the Redux store:

```javascript
// PlaylistIndexContainer.js

const playlistSelector = (playlists, scenario, user_id, playlistFollowers) => {
  if (scenario === 'library') {
    return Object.values(playlistFollowers)
      .filter(follow => follow.userId === user_id)
      .map(follow => playlists[follow.playlistId])
  } else {
    return Object.keys(playlists).map(id => playlists[id])
  }
}

const mstp = ({entities: {playlists, playlistFollowers}, session: {id}}, ownProps) => ({
  currentUserId: id,
  playlists: playlistSelector(playlists, ownProps.match.params.main, id, playlistFollowers),
  scenario: ownProps.match.params.main
})
```

This code snippet shows the ```playlistSelector``` function as well as the ```mstp``` which is short for "map state to props".  
  
```playlistSelector``` is given an object containing all the playlists from the Redux store, a ```scenario``` which is determined to be either "home" or "library" by the URL being visited, and finally an object of playlist followers which represents a relationship table mapping all users that follow all playlists. With this information the ```playlistSelector``` function can filter out which of the playlists should be included in the return value.  
  
```mstp``` simply uses the ```playlistSelector``` function to map the appropriate playlists to the wrapped component.  
  
  ### Continuous Playback and Playbar Component
  
  Another challenging, yet essential aspect of the project was the ability for the user to browse the website while providing an uninterrupted listening experience. The code snippets below show how this issue was tackled:  
```javascript
// PlayerPage.jsx

const PlayerPage = () => {
  return (
    <div className='player-page'>
      <PlayerNavBarContainer />
      <PlayBarContainer />
      <Switch>
        <Route path='playlists/:playlistId' component={PlaylistShowContainer} />
        <Route path='/' component={PlayerDisplay} />
      </Switch>
    </div>
  )
}
```
The PlayerPage component is rendered after a user is logged-in. Here three main components are rendered, we are only concerned with the ```PlayBarContainer```, which contains the controls for music playback. By rendering the ```PlayBarContainer``` in the top-level component we can ensure that navigation through the website will not trigger it to rerender, allowing for continuous playback.