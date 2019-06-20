import { connect } from 'react-redux';
import AlbumShow from './AlbumShow';
import { fetchAlbum } from '../../../../../actions/album_actions';
import { playSong } from '../../../../../actions/song_actions';

const songsSelector = (songs, album_id) => {
  return Object.values(songs)
    .filter(song => song.albumId === album_id)
}

const albumSelector = (albums, album_id) => {
  if (albums[album_id]) {
    return albums[album_id];
  } else {
    return [];
  }
}

const mstp = (state, ownProps) => ({
  albumId: ownProps.match.params.id,
  songs: songsSelector(state.entities.songs, ownProps.match.params.id),
  album: albumSelector(state.entities.albums, ownProps.match.params.id),
})

const mdtp = dispatch => ({
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  playSong: (song) => dispatch(playSong(song)),
})

export default connect(mstp, mdtp)(AlbumShow);