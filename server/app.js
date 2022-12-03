import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import { apiRoute } from './routes/omdb.js';

const app = express();

app.use(cors());
app.use('/api', apiRoute);

app.all('*', (req, res) => {
  return res.sendStatus(404);
});

export { app };
