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
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder={'Start typing...'} value={this.state.searchTerm} onChange={this.handleInput()}/>
          </form>
        </div>
      </div>
    )
  }
}

export default Search;