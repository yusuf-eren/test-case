import fetch from 'node-fetch';
import cache from 'memory-cache';

const movieRequest = async (params) => {
  const { keyword, page } = params;

  const cachedMovies = await cache.get(`${keyword}#${page}`);
  if (cachedMovies) return cachedMovies;

  const url = 'http://www.omdbapi.com/?';
  let searchParams = new URLSearchParams({
    apikey: process.env.OMDB_API_KEY,
    s: keyword,
    page: page * 2 - 1,
  });

  const movies = await fetch(url + searchParams, {
    method: 'GET',
  })
    .then((movies) => movies.json())
    .catch((err) => err);

  if (movies.totalResults > 10) {
    searchParams.set('page', page * 2);
    const secondPage = await fetch(url + searchParams, { method: 'GET' }).then(
      (movies) => movies.json()
    );
    movies['Search'].push(...secondPage['Search']);
  }

  await cache.put(`${keyword}#${page}`, movies, 1000 * 30);

  return movies;
};

export const searchMovies = async (keyword, page = 1) => {
  const movies = await movieRequest({ page: page * 2 - 1, keyword });
  if (movies['Error']) return { message: 'No movies found' };

  return {
    movies: movies['Search'],
    resultsCount: movies['Search'].length,
    totalResults: movies.totalResults,
  };
};
