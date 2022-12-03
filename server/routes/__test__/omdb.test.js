import request from 'supertest';
import { app } from '../../app.js';

describe('OMDB API Operations', () => {
  it('send 200 when search is success', async () => {
    await request(app).get('/api/search?keyword=black').expect(200);
  });

  it('get from cache in less than 20ms', async () => {
    let start;
    await request(app)
      .get('/api/search?keyword=hand')
      .expect(200)
      .then(() => (start = new Date()));

    await request(app).get('/api/search?keyword=hand').expect(200);
    expect(new Date() - start).toBeLessThan(20);
  });

  it('send 200 when cache is cleaned', async () => {
    await request(app).get('/api/search?keyword=hand').expect(200);
    await request(app).get('/api/clear').expect(200);
  });
});
