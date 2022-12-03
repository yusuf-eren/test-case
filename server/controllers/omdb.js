import { searchMovies } from '../services/api/omdb.js';
import { clearCache } from '../services/cache.js';

let i = 0

export const searchMovieController = async (req, res) => {
  if (!req.query.keyword) {
    return res.status(400).send({ message: 'keyword parameter is required' });
  }

  console.log('triggered ', i)
  i++
  try {
    const movies = await searchMovies(req.query.keyword, req.query.page);
    return res.status(200).send({
      data: movies,
    });
  } catch (error) {
    return res.send(error);
  }
};

export const clearCacheController = (req, res) => {
  clearCache();
  return res.status(200).send({
    data: {
      message: 'cache cleared',
    },
  });
};
