export const fetchAlbums = () => (
  $.ajax({
    method: `GET`,
    url: `/api/albums`,
  })
)

export const fetchAlbum = (id) => (
  $.ajax({
    method: `GET`,
    url: `/api/albums/${id}`
  })
)

export const searchAlbums = (query) => (
  $.ajax({
    method: `GET`,
    url: `/api/albums`,
    data: {search: query}
  })
)