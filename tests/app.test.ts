import app from '../src/app';
import request from 'supertest';
import Album from '../src/database/models/album';

describe('home page', () => {
  it('should open home page successfully', () => {
      return request(app).get('/').expect(200);
  });
});

describe('database setup', () => {
  it('should create an album record successfully', () => {
    const album = new Album({
      name: 'A sample album name',
      releaseYear: 2000,
      director: 'A director',
      musicDirector: 'A music director',
    });
    return album.save().then(res => {
      console.log(res);
    })
  }, 30000)
})
