export const searchArtists = (query) => (
  $.ajax({
    method: `GET`,
    url: `/api/artists`,
    data: {search: query}
  })
)

export const fetchArtists = () => (
  $.ajax({
    method: `GET`,
    url: `/api/artists`,
  })
)