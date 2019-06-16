import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: props.match.params.searchTerm ? props.match.params.searchTerm : ''
    }
  }

  onSubmit() {
    return;
  }

  handleInput() {
    return (e) => {
      this.setState({searchTerm: e.target.value})
      // this.props.
      console.log(this.props);

      if (e.target.value === '') {
        this.props.history.push('/search')
      } else {
        this.props.history.push(`/search/results/${e.target.value}`)
      }
    }
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
        </div>
      </div>
    )
  }
}

export default Search;