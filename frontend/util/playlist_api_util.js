export const fetchPlaylists = () => (
  $.ajax({
    method: `GET`,
    url: `/api/playlists`
  })
)

export const createPlaylist = (playlist) => (
  $.ajax({
    method: `POST`,
    url: `/api/playlists`,
    data: {playlist}
  })
)