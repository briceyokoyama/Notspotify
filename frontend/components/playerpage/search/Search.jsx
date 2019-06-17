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
        this.props.searchSongs(e.target.value.toLowerCase());
        this.props.searchAlbums(e.target.value.toLowerCase());
        this.props.searchArtists(e.target.value.toLowerCase());
        this.props.searchPlaylists(e.target.value.toLowerCase());
      }
    }
  }

  render() {
    console.log("props: ", this.props);
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
          <SearchResults headings={this.state.headings}/>
        </div>
      </div>
    )
  }
}

export default Search;