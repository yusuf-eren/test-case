import cache from 'memory-cache';

export const clearCache = () => {
  return cache.clear();
};
