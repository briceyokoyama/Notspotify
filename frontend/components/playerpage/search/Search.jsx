import React from 'react';
import SearchResults from './SearchResults';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: props.match.params.searchTerm,
      headings: []
    }
  }

  componentDidMount() {
    if (this.props.match.params.searchTerm) {
      this.performSearch(this.props.match.params.searchTerm)
    }
  }

  componentDidUpdate(prevProps) {

    if (this.props !== prevProps) {
      let headings = [];
      if (this.props.artists.length !== 0) {
        headings.push('ARTISTS')
      }
      if (this.props.albums.length !== 0) {
        headings.push('ALBUMS')
      }
      if (this.props.playlists.length !== 0) {
        headings.push('PLAYLISTS')
      }
      if (this.props.songs.length !== 0) {
        headings.push('SONGS')
      }
      this.setState({headings});
    }
  }

  handleInput() {
    return (e) => {
      this.setState({searchTerm: e.target.value})
      if (e.target.value === '') {
        this.props.history.push('/search')
      } else {
        this.props.history.push(`/search/results/${e.target.value}`)
        this.performSearch(e.target.value);
      }
    }
  }

  performSearch(searchTerm) {
    this.props.searchSongs(searchTerm.toLowerCase());
    this.props.searchAlbums(searchTerm.toLowerCase());
    this.props.searchArtists(searchTerm.toLowerCase());
    this.props.searchPlaylists(searchTerm.toLowerCase());
  }

  render() {
    return (
      <div className="search-main-container">
        <div className="search-display-container">
          <div className="search-entry">
            <div className="search-entry-spacing">
              <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder={'Start typing...'} value={this.state.searchTerm} onChange={this.handleInput()}/>
              </form>
            </div>
          </div>
          <SearchResults
            headings={this.state.headings}
            songs={this.props.songs}
            albums={this.props.albums}
            artists={this.props.artists}
            playlists={this.props.playlists}
            playSong = {this.props.playSong}
          />
        </div>
      </div>
    )
  }
}

export default Search;