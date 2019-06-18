import React from 'react';
import ArtistSearch from './ArtistSearch';

class SearchResults extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: 'ARTISTS'
    }
  }

  render() {

    let results;
    switch (this.state.selected) {
      case 'ALBUMS':
        // results = <AlbumSearch artists={this.props.album}/>
      case 'ARTISTS':
        results = <ArtistSearch artists={this.props.artists}/>
      case 'PLAYLISTS':
        // results = <PlaylistSearch artists={this.props.playlists}/>
      case 'SONGS':
        // results = <SongsSearch artists={this.props.songs}/>
      default:
        break;
    }

    console.log(this.props);

    return (
      <div className="search-results-container">
        <div className="search-results-navbar">
          <div className='search-display-nav-container'>
            <ul>
              {this.props.headings.map((heading, idx) => {
                return (
                  <li key={idx} >{heading}</li>
                )}
              )}
            </ul>
          </div>
        </div>
        <div className='search-display-results-container'>
          {results}
        </div>
      </div>
    )
  }
}

export default SearchResults;