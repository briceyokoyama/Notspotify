export const recivePlaylistFollowers = () => (
  $.ajax({
    method: `GET`,
    url: `/api/playlist_followers`
  })
)