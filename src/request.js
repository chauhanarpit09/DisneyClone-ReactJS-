const APIkey = 'd2ae966b0bae2a9f7dbc2a38133cb0f8'

const request = {
  fetchTrending: `/trending/all/day?api_key=${APIkey}`,
  fetchpopularmovies: `/movie/popular?api_key=${APIkey}&page=1`,
  fetchtopratedmovies: `/movie/top_rated?api_key=${APIkey}&page=1`,
  fetchratedshows: `/tv/top_rated?api_key=${APIkey}&page=1`,
  fetchpopularshows: `/tv/popular?api_key=${APIkey}&page=1`,
  fetchtvshowtrailer: `/tv/{tv_id}/similar?api_key=${APIkey}&page=1`,
  fetchupcoming: `/movie/upcoming?api_key=${APIkey}&language=en-US&page=1`
}

export default request
