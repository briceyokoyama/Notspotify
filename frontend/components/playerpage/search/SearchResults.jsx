import React from 'react';

class SearchResults extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
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
      </div>
    )
  }
}

export default SearchResults;