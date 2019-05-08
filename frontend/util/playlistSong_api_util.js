export const recivePlaylistSongs = () => (
  $.ajax({
    method: `GET`,
    url: `/api/playlist_songs`
  })
)