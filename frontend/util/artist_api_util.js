export const searchArtists = (query) => (
  $.ajax({
    method: `GET`,
    url: `/api/artists`,
    data: {search: query}
  })
)

export const fetchArtist = (id) => (
  $.ajax({
    method: `GET`,
    url: `/api/artists/${id}`
  })
)

export const fetchArtists = () => (
  $.ajax({
    method: `GET`,
    url: `/api/artists`,
  })
)