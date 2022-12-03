import express from 'express';
import {
  clearCacheController,
  searchMovieController,
} from '../controllers/omdb.js';
const app = express();

app.get('/search', searchMovieController);
app.get('/clear', clearCacheController);

export { app as apiRoute };
