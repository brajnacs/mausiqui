import app from '../src/app';
import request from 'supertest';

describe('home page', () => {
  it('should open home page successfully', () => {
      return request(app).get('/').expect(200);
  });
})
