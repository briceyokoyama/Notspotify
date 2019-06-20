import React from 'react';
import AlbumSearch from '../../../search/AlbumSearch';


class AlbumIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAlbums()
  }

  render() {
    return (
      <AlbumSearch albums={this.props.albums} />
    )
  }
}

export default AlbumIndex;