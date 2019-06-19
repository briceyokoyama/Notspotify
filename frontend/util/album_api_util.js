export const fetchAlbums = () => (
  $.ajax({
    method: `GET`,
    url: `/api/albums`,
  })
)

export const searchAlbums = (query) => (
  $.ajax({
    method: `GET`,
    url: `/api/albums`,
    data: {search: query}
  })
)