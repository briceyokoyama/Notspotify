export const searchArtists = (query) => (
  $.ajax({
    methos: `GET`,
    url: `/api/artists`,
    data: {search: query}
  })
)