import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    }
  }

  onSubmit() {
    return;
  }

  handleInput() {
    return (e) => {
      this.setState({searchTerm: e.target.value})
    }
  }

  render() {
    return (
      <div className="search-main-container">
        <div className="search-display-container">
          <div className="search-entry">
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder={'Start typing...'} value={this.state.searchTerm} onChange={this.handleInput()}/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;