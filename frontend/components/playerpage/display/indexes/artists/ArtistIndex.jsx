import React from 'react';
import ArtistSearch from '../../../search/ArtistSearch';


class ArtistIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchArtists()
  }

  render() {
    return (
      <ArtistSearch artists={this.props.artists} />
    )
  }
}

export default ArtistIndex;