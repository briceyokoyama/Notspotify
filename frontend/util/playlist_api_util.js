export const fetchPlaylists = (user_id) => (
  $.ajax({
    method: `GET`,
    url: `/api/playlists`,
    data: {user_id: user_id}
  })
)

export const fetchPlaylist = (id) => (
  $.ajax({
    method: `GET`,
    url: `/api/playlists/${id}`
  })
)

export const createPlaylist = (playlist) => (
  $.ajax({
    method: `POST`,
    url: `/api/playlists`,
    data: {playlist}
  })
)