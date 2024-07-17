import { API_KEY } from "./constants/constants";
export const Orginals = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`
export const action = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
export const Popular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
export const Toprated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
export const TVseries = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`