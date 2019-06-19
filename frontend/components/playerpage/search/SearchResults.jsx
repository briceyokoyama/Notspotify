import React from 'react';
import ArtistSearch from './ArtistSearch';
import AlbumSearch from './AlbumSearch';
import PlaylistSearch from './PlaylistSearch';
import SongSearch from './SongSearch';

class SearchResults extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: 'ARTISTS'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({selected: e.target.innerText})
  }

  render() {

    let results;
    switch (this.state.selected) {
      case 'ALBUMS':
        results = <AlbumSearch key={this.state.selected} albums={this.props.albums}/>
        break;
      case 'ARTISTS':
        results = <ArtistSearch key={this.state.selected} artists={this.props.artists}/>
        break;
      case 'PLAYLISTS':
        results = <PlaylistSearch playlists={this.props.playlists}/>
      case 'SONGS':
        results = <SongSearch songs={this.props.songs}/>
      default:
        break;
    }

    return (
      <div className="search-results-container">
        <div className="search-results-navbar">
          <div className='search-display-nav-container'>
            <ul>
              {this.props.headings.map((heading, idx) => {
                return (
                  <li 
                    key={idx}
                    className={ (this.state.selected.includes(heading)) ? 'selected-heading' : null }
                    onClick={this.handleClick}
                  >
                    {heading}
                  </li>
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