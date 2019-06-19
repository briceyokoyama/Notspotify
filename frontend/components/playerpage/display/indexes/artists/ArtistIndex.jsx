import React from 'react';
import ArtistSearch from '../../../search/ArtistSearch';


class ArtistIndex extends React.Component {
  constructor(props) {

  }

  componentDidMount() {
    
  }

  render() {
    return (
      <ArtistSearch artists={this.props.artists} />
    )
  }
}

export default ArtistIndex;