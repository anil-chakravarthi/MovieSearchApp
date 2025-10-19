const API_KEY = "5ddce8d5d42c63ba260820116d2685ea";
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () =>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
}

export const searchMovies = async (query) =>{
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          query
          )}`
        );
    const data = await response.json()
    return data.results
}