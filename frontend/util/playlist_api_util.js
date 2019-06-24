export const fetchPlaylists = (user_id) => (
  $.ajax({
    method: `GET`,
    url: `/api/playlists`,
    data: {user_id: user_id}
  })
)

export const searchPlaylists = (query) => (
  $.ajax({
    method: `GET`,
    url: `/api/playlists`,
    data: {search: query}
  })
)

export const searchPlaylistsByUserId = (userId) => (
  $.ajax({
    method: `GET`,
    url: `/api/playlists`,
    data: {userId: userId}
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