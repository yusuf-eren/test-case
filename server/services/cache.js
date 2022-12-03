import cache from 'memory-cache';

export const clearCache = () => {
  return cache.clear();
};

export const saveToCache = async (keyword, page, movies, seconds) => {
  return await cache.put(`${keyword}#${page}`, movies, 1000 * seconds);
};

export const getFromCache = async (keyword, page) => {
  return await cache.get(`${keyword}#${page}`);
};
